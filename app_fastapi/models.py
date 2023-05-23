from typing import Optional
from pydantic import BaseModel


class SummaryRequest(BaseModel):    
    text: str
    length_penalty: Optional[float] = 1.0   # 길이에 대한 penalty값. 1보다 작은 경우 더 짧은 문장을 생성하도록 유도하며, 1보다 클 경우 길이가 더 긴 문장을 유도
    max_length: Optional[int] = 128     # 요약문의 최대 길이 설정
    min_length: Optional[int] = 32      # 요약문의 최소 길이 설정
    num_beams: Optional[int] = 4        # 문장 생성시 다음 단어를 탐색하는 영역의 개수 

class FileRequest(BaseModel):
    file_name: str
    file_path: str
    user_id: str