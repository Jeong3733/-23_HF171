import chromadb
from chromadb.config import Settings


# client = chromadb.Client(Settings(
#     chroma_db_impl="duckdb+parquet",
#     persist_directory="/path/to/persist/directory"
#     # Optional, defaults to .chromadb/ in the current directory
# ))

# pip install chromadb-client
# Example setup of the client to connect to your chroma server
# client = chromadb.Client(
#     Settings(chroma_api_impl="rest",
#              chroma_server_host="localhost",
#              chroma_server_port=8000)
#     )


class Initdb:
    def __init__(self):
        self.client = client = chromadb.Client(
            Settings(chroma_db_impl="duckdb+parquet",
                     persist_directory="vec_chroma_db"
                     ))
        self.collection = self.client.get_or_create_collection('doument_all')

    # 임베딩 -> 데이터베이스 저장
    def db_add(self, embedding, document, metadata, id):
        self.collection.add(
            embeddings=embedding,
            documents=document,
            metadatas=metadata,
            ids=id
        )

    # 검색
    def query(self, test_embedding):
        query_result = self.collection.query(
            query_embeddings=test_embedding,
            n_results=3
        )
        return query_result
