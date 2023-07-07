from langchain.document_loaders import PyMuPDFLoader, DirectoryLoader

from langchain.text_splitter import RecursiveCharacterTextSplitter

from langchain.embeddings import OpenAIEmbeddings, HuggingFaceInstructEmbeddings

from langchain.vectorstores import Chroma

from langchain.llms import OpenAI

from langchain.prompts import PromptTemplate

from langchain.chains import RetrievalQA
from langchain.chains.summarize import load_summarize_chain

import os
from dotenv import load_dotenv

load_dotenv()

class AI:
    def __init__(self) -> None:
        self.file_path = None
        self.chunk_size = 1000
        self.chunk_overlap = 200
        
        self.embedding = OpenAIEmbeddings()
        self.persist_directory = None
        self.n_similar = 3
    
    def _upload_document(self):
        """
        문서를 업로드하면 텍스트 리스트로 변환하는 함수
        """
        loader = PyMuPDFLoader(file_path=self.file_path)
        documents = loader.load()
        
        # splitting the text into
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=self.chunk_size, chunk_overlap=self.chunk_overlap)
        texts = text_splitter.split_documents(documents)
        return texts

    def _get_vectordb(self, texts):
        """
        텍스트를 기존(새로운) 벡터 DB에 저장하는 함수
        """
        vectordb = Chroma.from_documents(documents=texts, 
                                        embedding=self.embedding,
                                        persist_directory=self.persist_directory)
        vectordb.persist()
        return vectordb

    def _load_retriever(self):
        """
        _load_retriever 주어진 텍스트와 유사한 상위 N개의 벡터를 반환하는 함수
        """
        vectordb = Chroma(persist_directory=self.persist_directory, 
                        embedding_function=self.embedding)

        retriever = vectordb.as_retriever(search_kwargs={"k": self.k_similar})
        return retriever

    def _similarity_search(self, text):
        """
        주어진 텍스트와 유사한 상위 N개의 벡터를 반환하는 함수
        """
        vectordb = Chroma(persist_directory=self.persist_directory, 
                        embedding_function=self.embedding)
        
        # query it
        docs = vectordb.similarity_search(text)
        return docs

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

class Summary(AI):
    def __init__(self) -> None:
        super().__init__()
    
    def run(self, file_path):
        texts = self._upload_document(file_path=file_path)
        
        llm = OpenAI(temperature=0)
        chain = load_summarize_chain(llm, 
                             chain_type="map_reduce",
                             verbose = False)
        output_summary = chain.run(texts)
        return output_summary

class DocumentQA(AI):
    def __init__(self) -> None:
        super().__init__()
    
    def newinit(self, file_path):
        texts = self._upload_document(file_path=file_path)
        vectordb = self._get_vectordb(texts)
    
    def question(self, query):
        self._get_retriever()