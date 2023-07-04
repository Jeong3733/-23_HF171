
# LangChain Retrieval QA Over Multiple Files with ChromaDB
# https://youtu.be/3yPBVii7Ct0
# https://colab.research.google.com/drive/1gyGZn_LZNrYXYXa-pltFExbptIe7DAPe?usp=sharing


from langchain import OpenAI, PromptTemplate, LLMChain
from langchain.text_splitter import CharacterTextSplitter, RecursiveCharacterTextSplitter
from langchain.chains.mapreduce import MapReduceChain
from langchain.prompts import PromptTemplate
from langchain.document_loaders import PyMuPDFLoader
from langchain.chains.summarize import load_summarize_chain

import os
from dotenv import load_dotenv

load_dotenv()


class QAChain:
    def __init__(self) -> None:
        pass
    
    def run(self):
        path = '/Users/ktg/Desktop/23_HF171/AI_TEST/data/서울특별시 버스노선 혼잡도 예측을 통한 다람쥐버스 신규 노선제안(장려).pdf'
        loader = PyMuPDFLoader(path)
        documents = loader.load()
        
        # splitting the text into
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        texts = text_splitter.split_documents(documents)
        
        llm = OpenAI(temperature=0)
        
        import textwrap

        chain = load_summarize_chain(llm, 
                                    chain_type="map_reduce",
                                    verbose = False)

        output_summary = chain.run(texts)
        print(output_summary)
        

def main():
    qa = QAChain()
    qa.run()
    
if __name__ == '__main__':
    main()
