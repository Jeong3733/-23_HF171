
# Langchain Summarizer로 쉽게 문서 요약하기
# https://blog.futuresmart.ai/summarizing-documents-made-easy-with-langchain-summarizer

from langchain import OpenAI
from langchain.text_splitter import RecursiveCharacterTextSplitter # CharacterTextSplitter

from langchain.prompts import PromptTemplate
from langchain.document_loaders import PyMuPDFLoader
from langchain.chains.summarize import load_summarize_chain

# import textwrap

import os
from dotenv import load_dotenv

load_dotenv()


class SummaryChain:
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
        chain = load_summarize_chain(llm, 
                                    chain_type="map_reduce",
                                    verbose = False)

        output_summary = chain.run(texts)
        print(output_summary)
    
    def run2(self):
        path = '/Users/ktg/Desktop/23_HF171/AI_TEST/data/서울특별시 버스노선 혼잡도 예측을 통한 다람쥐버스 신규 노선제안(장려).pdf'
        loader = PyMuPDFLoader(path)
        documents = loader.load()
        
        # splitting the text into
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        texts = text_splitter.split_documents(documents)
        
        prompt_template = """Write a concise bullet point summary of the following:
        {text}

        CONSCISE SUMMARY IN BULLET POINTS:"""

        BULLET_POINT_PROMPT = PromptTemplate(template=prompt_template,
                                input_variables=["text"])

        llm = OpenAI(temperature=0)        
        chain = load_summarize_chain(llm, 
                                    chain_type="stuff", 
                                    prompt=BULLET_POINT_PROMPT)

        output_summary = chain.run(texts)
        

def main():
    summarychain = SummaryChain()
    summarychain.run2()
    
if __name__ == '__main__':
    main()
