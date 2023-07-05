
# LangChain Retrieval QA Over Multiple Files with ChromaDB
# https://youtu.be/3yPBVii7Ct0
# https://colab.research.google.com/drive/1gyGZn_LZNrYXYXa-pltFExbptIe7DAPe?usp=sharing


from langchain.document_loaders import DirectoryLoader, PyMuPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

import os
from dotenv import load_dotenv

load_dotenv()


class QAChain:
    def __init__(self) -> None:
        pass
    
    def run(self):
        # Load and process the pdf files
        path = "/Users/ktg/Desktop/23_HF171/AI_TEST/data"
        # path = './data/'
        loader = DirectoryLoader(path, glob="./*.pdf", loader_cls=PyMuPDFLoader)
        documents = loader.load()

        # splitting the text into
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=200)
        texts = text_splitter.split_documents(documents)

        # Embed and store the texts
        # Supplying a persist_directory will store the embeddings on disk
        embedder = OpenAIEmbeddings()
        persist_directory = 'db'
        vectordb = Chroma.from_documents(documents=texts, 
                                embedding=embedder,
                                persist_directory=persist_directory)
        
        retriever = vectordb.as_retriever(search_kwargs={"k": 2})

        # create the chain to answer questions 
        llm = OpenAI()
        qa_chain = RetrievalQA.from_chain_type(llm=llm, 
                                        chain_type="stuff", 
                                        retriever=retriever, 
                                        return_source_documents=True)

        ## Cite sources
        def process_llm_response(llm_response):
            print(llm_response['result'])
            # print(wrap_text_preserve_newlines(llm_response['result']))
            print('\n\nSources:')
            for source in llm_response["source_documents"]:
                print(source.metadata['source'])

        # full example
        query = "사회구조적 특성이 빈집 형성에 끼친 영항에 대해 설명해주세요"
        # print("성공했겠지")
        llm_response = qa_chain(query)
        process_llm_response(llm_response)

import time
def main():
    start = time.time() # 시작

    qa = QAChain()
    qa.run()
    print(f"{time.time()-start:.4f} sec") # 종료와 함께 수행시간 출력
    
if __name__ == '__main__':
    main()
