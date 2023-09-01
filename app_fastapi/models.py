from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel


class SummaryRequest(BaseModel):
    text: str
    # 길이에 대한 penalty값. 1보다 작은 경우 더 짧은 문장을 생성하도록 유도하며, 1보다 클 경우 길이가 더 긴 문장을 유도
    length_penalty: Optional[float] = 1.0
    max_length: Optional[int] = 128     # 요약문의 최대 길이 설정
    min_length: Optional[int] = 32      # 요약문의 최소 길이 설정
    num_beams: Optional[int] = 4        # 문장 생성시 다음 단어를 탐색하는 영역의 개수


class FileRequest(BaseModel):
    file_name: str
    file_path: str
    user_id: str


class FileInfo(BaseModel):
    file_id: str
    file_extension: str
    path: str

    class Config:
        schema_extra = {'example': {'file_id': 'file_id',
                                    'file_extension': 'pdf',
                                    'path': 'uuid'}}


class PageIdList(BaseModel):
    page_id_list: List[str]

    class Config:
        schema_extra = {'example': {'page_id_list': ["891e0716-37af-11ee-bdab-56cc850cf3c0",
                                                     "891e0770-37af-11ee-bdab-56cc850cf3c0"]}}


class PageContents(BaseModel):
    pageId: str
    pageContent: str

    class Config:
        schema_extra = {'example': {
            'pageId': "891e0716-37af-11ee-bdab-56cc850cf3c0",
            'pageContent': "pageContent pageContent pageContent"
        }}


class PagesContents(BaseModel):
    pageInfo: List[PageContents]

    class Config:
        schema_extra = {'example': {'pageInfo': [{
            'pageId': "891e0716-37af-11ee-bdab-56cc850cf3c0",
            'pageContent': "pageContent pageContent pageContent"
        }, {
            'pageId': "891e0770-37af-11ee-bdab-56cc850cf3c0",
            'pageContent': "pageContent pageContent pageContent"
        }]}}


class PageInfo(BaseModel):
    fileId: str
    pageId: str
    pageNum: int
    startIndex: int
    summary: str

    class Config:
        schema_extra = {'example': {
            'fileId': 1,
            'pageId': 'pageId',
            'pageNum': 0,
            'startIndex': 12,
            'summary': 'summary summary'
        }}


class CompPageInfo(BaseModel):
    fileId: str
    pageId: str
    pageNum: int
    startIndex: int

    class Config:
        schema_extra = {'example': {
            'fileId': 1,
            'pageId': 'pageId',
            'pageNum': 0,
            'startIndex': 12,
        }}


class CompPageList(BaseModel):
    pageInfo: List[CompPageInfo]

    class Config:
        schema_extra = {'example': {'pageInfo': [{
            'fileId': 1,
            'pageId': 'pageId',
            'pageNum': 0,
            'startIndex': 12,
        }, {
            'fileId': 1,
            'pageId': 'pageId',
            'pageNum': 1,
            'startIndex': 12,
        }]}}


class PageResultInfo(BaseModel):
    pageId: str
    compPageId: str
    score: float
    report: str

    class Config:
        schema_extra = {'example': {
            'pageId': 'pageID',
            'compPageId': 'compID',
            'score': 12.3,
            'report': 'report report report',
        }}


class FileResultInfo(BaseModel):
    fileId: int
    compFileId: int
    score: float
    report: str

    class Config:
        schema_extra = {'example': {
            'fileId': 1,
            'compFileId': 2,
            'score': 12.3,
            'report': 'report report report',
        }}


class ResultInfo(BaseModel):
    fileSummary: str
    pageInfo: List[PageInfo]
    pageResultInfo: List[PageResultInfo]
    # fileResultInfo: List[FileResultInfo]

    class Config:
        schema_extra = {'example': {'fileSummary': 'fileSummary fileSummary',
                                    'pageInfo': [{
                                        'fileId': 1,
                                        'pageId': 'pageId',
                                        'pageNum': 0,
                                        'startIndex': 12,
                                        'summary': 'summary summary'
                                    }, {
                                        'fileId': 1,
                                        'pageId': 'pageId',
                                        'pageNum': 0,
                                        'startIndex': 12,
                                        'summary': 'summary summary'
                                    }],
                                    'pageResultInfo': [{
                                        'pageId': 'pageID',
                                        'compPageId': 'compID',
                                        'score': 12.3,
                                        'report': 'report report report',
                                    }, {
                                        'pageId': 'pageID',
                                        'compPageId': 'compID',
                                        'score': 12.3,
                                        'report': 'report report report',
                                    }]}}


class QuestionForm(BaseModel):
    file_id: str
    query: str

    class Config:
        schema_extra = {'example': {
            'file_id': 'file_id',
            'query': '이 문서의 이름은 무엇인가요?'
        }}


class AnswerForm(BaseModel):
    result: str
    source: List[str]

    class Config:
        schema_extra = {'example': {
            'result': 'file_id',
            'source': ['source_1', 'source_2', 'source_3']
        }}
