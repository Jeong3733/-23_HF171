from typing import TYPE_CHECKING, Any, Dict, Iterable, List, Optional, Tuple, Type

import chromadb
import chromadb.config
from langchain.embeddings.base import Embeddings
from langchain.utils import xor_args
from langchain.docstore.document import Document

from langchain.document_loaders import PyMuPDFLoader, DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings, HuggingFaceEmbeddings
from langchain.vectorstores import Chroma
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import RetrievalQA
from langchain.chains.summarize import load_summarize_chain

import os
from dotenv import load_dotenv
import boto3
from ai.module.conf import config

load_dotenv()
# DEFAULT_K = 4  # Number of Documents to return.

model_name = "intfloat/multilingual-e5-large"
model_kwargs = {'device': 'cpu'}
encode_kwargs = {'normalize_embeddings': False}
hf = HuggingFaceEmbeddings(
    model_name=model_name,
    model_kwargs=model_kwargs,
    encode_kwargs=encode_kwargs
)


def _results_to_docs_and_scores(results: Any) -> List[Tuple[Document, float]]:
    return [
        # TODO: Chroma can do batch querying,
        # we shouldn't hard code to the 1st result
        (Document(page_content=result[0],
         metadata=result[1] or {}), result[2], result[3])
        for result in zip(
            results["documents"][0],
            results["metadatas"][0],
            results["ids"][0],
            results["distances"][0],
        )
    ]


class NewChroma(Chroma):
    _LANGCHAIN_DEFAULT_COLLECTION_NAME = "langchain"

    def __init__(
        self,
        collection_name: str = _LANGCHAIN_DEFAULT_COLLECTION_NAME,
        embedding_function: Optional[Embeddings] = None,
        persist_directory: Optional[str] = None,
        client_settings: Optional[chromadb.config.Settings] = None,
        collection_metadata: Optional[Dict] = None,
        client: Optional[chromadb.Client] = None,
    ) -> None:
        super().__init__(collection_name, embedding_function,
                         persist_directory, client_settings, collection_metadata, client)

    def similarity_search_by_vector_with_score(
        self,
        embedding: List[float],
        k: int = config['NewChroma']['DEFAULT_K'],
        filter: Optional[Dict[str, str]] = None,
        **kwargs: Any,
    ) -> List[Document]:
        """Return docs most similar to embedding vector.
        Args:
            embedding (str): Embedding to look up documents similar to.
            k (int): Number of Documents to return. Defaults to 4.
            filter (Optional[Dict[str, str]]): Filter by metadata. Defaults to None.
        Returns:
            List of Documents most similar to the query vector.
        """
        results = self.__query_collection(
            query_embeddings=embedding, n_results=k, where=filter
        )
        return _results_to_docs_and_scores(results)

    @xor_args(("query_texts", "query_embeddings"))
    def __query_collection(
        self,
        query_texts: Optional[List[str]] = None,
        query_embeddings: Optional[List[List[float]]] = None,
        n_results: int = 4,
        where: Optional[Dict[str, str]] = None,
        **kwargs: Any,
    ) -> List[Document]:
        """Query the chroma collection."""
        try:
            import chromadb  # noqa: F401
        except ImportError:
            raise ValueError(
                "Could not import chromadb python package. "
                "Please install it with `pip install chromadb`."
            )
        return self._collection.query(
            query_texts=query_texts,
            query_embeddings=query_embeddings,
            n_results=n_results,
            where=where,
            **kwargs,
        )


class AI:
    def __init__(self) -> None:
        # self.embedding = OpenAIEmbeddings()
        self.embedding = hf

    def _upload_document(self, file_path):
        """
        문서를 업로드하면 텍스트 리스트로 변환하는 함수
        """
        # file_path = None
        chunk_size = config['AI']['chunk_size']
        chunk_overlap = config['AI']['chunk_overlap']
        encoding_name = config['AI']['encoding_name']

        loader = PyMuPDFLoader(file_path=file_path)
        documents = loader.load()

        # splitting the text into
        # text_splitter = RecursiveCharacterTextSplitter(
        #     chunk_size=chunk_size, chunk_overlap=chunk_overlap)
        text_splitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(
            encoding_name=encoding_name,
            chunk_size=chunk_size, chunk_overlap=chunk_overlap,
            add_start_index=True)

        docs = text_splitter.split_documents(documents)
        return docs

    def _get_vectordb(self, docs, persist_directory):
        """
        텍스트를 새로운 벡터 DB에 저장하는 함수
        """

        vectordb = NewChroma.from_documents(documents=docs,
                                            embedding=self.embedding,
                                            persist_directory=persist_directory)
        vectordb.persist()
        return vectordb

    def _load_vectordb(self, persist_directory):
        """
        기존 벡터 DB에 불러오는 함수
        """

        vectordb = NewChroma(persist_directory=persist_directory,
                             embedding_function=self.embedding)
        return vectordb

    def _getFileFromBoto3(self, fileInfo):
        filePath = f"data/{fileInfo['path']}.{fileInfo['file_extension']}"
        # filePath = "data/test.pdf"
        s3 = boto3.client("s3")
        s3.download_file(
            Bucket=config['DoucmentInit']['s3_bucket'],
            # key=fileInfo['path'],
            Key="test.pdf",
            # Filename=filePath
            Filename=filePath
        )
        return filePath

    def _getFileFromS3(self, fileInfo):
        filePath = f"data/{fileInfo['path']}.{fileInfo['file_extension']}"
        # filePath = "data/test.pdf"
        return filePath

    def _convert_to_prompt(self, text):
        """
        텍스트를 프롬프트로 변환하는 함수
        """
        prompt = text
        return prompt

    def _get_prompt_result(self, prompt):
        """
        프롬프트를 실행하여 결과를 반환하는 함수
        """
        res = prompt
        return res


class DoucmentInit(AI):
    def __init__(self) -> None:
        super().__init__()

    def upload(self, fileInfo):
        # file_path = self._getFileFromBoto3(fileInfo=fileInfo)
        file_path = self._getFileFromS3(fileInfo=fileInfo)
        docVectorDB_directory = config['DoucmentInit']['docVectorDB_directory'] + '/' + \
            fileInfo['path']
        # docVectorDB_directory = 'docVectorDBs/newTest'
        analyticsReport_format = config['DoucmentInit']['analyticsReport_format']
        print(file_path)
        file_path = 'testdata/서울특별시 버스노선 혼잡도 예측을 통한 다람쥐버스 신규 노선제안(장려).pdf'
        print(file_path)
        docs = self._upload_document(file_path=file_path)

        # --- QA Setting ---
        docVectorDB = self._get_vectordb(docs=docs,
                                         persist_directory=docVectorDB_directory)

        # --- Summary ---
        llm = OpenAI(temperature=0)
        chain = load_summarize_chain(llm=llm,
                                     chain_type="map_reduce",
                                     verbose=True)
        # fileSummary = chain.run(docs)
        fileSummary = 'fileSummary'
        # print(fileSummary)

        # --- 표절 검사 ---
        getVectorDBInfo = docVectorDB.get(
            include=['embeddings', 'documents', 'metadatas'])

        # compVectorDB_directory = config['DoucmentInit']['compVectorDB_directory']
        # compVectorDB = self._load_vectordb(persist_directory=compVectorDB_directory)
        compVectorDB = docVectorDB

        # print(getVectorDBInfo)

        def analysis(analyticsReport_prompt):
            return len(analyticsReport_prompt)

        getResultCheck = []
        pagesInfo = []
        for checkID, checkDoc, checkVector, checkMetaDatas in zip(getVectorDBInfo['ids'],
                                                                  getVectorDBInfo['documents'],
                                                                  getVectorDBInfo['embeddings'],
                                                                  getVectorDBInfo['metadatas']):
            print(fileInfo['path'], checkID, checkMetaDatas['page'],
                  checkMetaDatas['start_index'])
            pagesInfo.append({
                'file_id': fileInfo['path'],
                'page_id': checkID,
                'page_num': checkMetaDatas['page'],
                'start_index': checkMetaDatas['start_index'],
                'summary': 'pageSummary'
            })

            similarDocuments = compVectorDB.similarity_search_by_vector_with_score(
                embedding=checkVector,
                distance_metric="cos",
                k=4)

            for compDoc, compID, score in similarDocuments:
                analyticsReport_prompt = f"""당신은 표절 검사 분석 전문가입니다. 표절 검사를 진행한 결과, 특정 비교 문서와 유사하다는 결과가 나왔습니다.
            세 개의 역 따옴표, 세 개의 따옴표, 세 개의 큰 따옴표로 구분된 각 텍스트들은 검사 문서 중 일부분,비교 문서 중 일부분, 분석 결과 보고서 포맷입니다.
            분석 결과 보고서 작성해주세요.\n```{checkDoc}```\n\'\'\'{compDoc.page_content}\'\'\'\n\"\"\"{analyticsReport_format}\"\"\""""
                report = analysis(analyticsReport_prompt)
                getResultCheck.append({
                    'page_id': checkID,
                    'comp_page_id': compID,
                    'score': score,
                    'report': report,
                })
                getResultCheck.append((checkID, compID, score, report))
            # print(getResultCheck)
        resDict = {'status': True,
                   'result': {'fileSummary': fileSummary,
                              'pagesInfo': pagesInfo,
                              'getResultCheck': getResultCheck}}
        return resDict


class DocumentQA(AI):
    def __init__(self) -> None:
        super().__init__()

    def newinit(self, file_path):
        docs = self._upload_document(file_path=file_path)
        vectordb = self._get_vectordb(docs)

    def question(self, query):
        self._get_retriever()


def main():
    init = DoucmentInit()
    print(init.upload())


if __name__ == '__main__':
    main()
