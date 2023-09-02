from fastapi import APIRouter

from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from ai.module.function import DoucmentInit
from ai.module.util import Util
from models import (ReqGetFileInfo, ReqPageIdList, ResPagesContents,
                    ReqGetCompetitonFileInfo, ResGetCompetitonFileInfo,
                    ResResultInfo, ResCompPageList,
                    ReqGetFileQNA, ResGetFileQNA,
                    ReqGetCompetitionFileQNA,
                    ReqFileReport, ResFileReport)

router = APIRouter()
util = Util()
initObj = DoucmentInit()


@router.post("/get/file/detail", tags=['Function'], response_model=ResResultInfo)
async def uploadInFileInfo(fileInfo: ReqGetFileInfo):
    resDict = initObj.upload(fileInfo)
    resDict = util.convert_numpy_to_list(resDict)
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)


@router.post("/get/compFile/detail", tags=['Function'], response_model=ResCompPageList)
async def uploadInCompFileInfo(fileInfo: ReqGetFileInfo):
    resDict = initObj.addInCompDB(fileInfo)
    resDict = util.convert_numpy_to_list(resDict)
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)


@router.post("/get/competitionFile/detail", tags=['Function'], response_model=ResGetCompetitonFileInfo)
async def uploadInCompetitionFileInfo(fileInfo: ReqGetCompetitonFileInfo):
    resDict = initObj.addInCompetitionDB(fileInfo)
    resDict = util.convert_numpy_to_list(resDict)
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)


@router.post("/get/compFile/pageId", tags=['Function'], response_model=ResPagesContents)
async def getContentsFromCompPageInfo(pageIdList: ReqPageIdList):
    # print(pageIdList.page_id_list)
    # pageIdList = ["891e0716-37af-11ee-bdab-56cc850cf3c0",
    #               "891e0770-37af-11ee-bdab-56cc850cf3c0"]
    resDict = initObj.getContentsFromCompDB(pageIdList.page_id_list)
    resDict = util.convert_numpy_to_list(resDict)
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)


@router.post("/get/file/qna", tags=['Function'], response_model=ResGetFileQNA)
async def qnaAboutFile(questionForm: ReqGetFileQNA):
    resDict = initObj.qaAboutCompetitionFile(questionForm)
    resDict = util.convert_numpy_to_list(resDict)
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)


@router.post("/get/competitionFile/qna", tags=['Function'], response_model=ResGetFileQNA)
async def qnaAboutFile(questionForm: ReqGetCompetitionFileQNA):
    resDict = initObj.qaAboutCompetitionFile(questionForm)
    resDict = util.convert_numpy_to_list(resDict)
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)


@router.post("/get/file/report", tags=['Function'], response_model=ResFileReport)
async def getReportAboutFile(reqFileReport: ReqFileReport):
    resDict = initObj.createReport(reqFileReport)
    resDict = util.convert_numpy_to_list(resDict)
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)
