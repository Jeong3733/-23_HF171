from fastapi import APIRouter

from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from ai.module.function import DoucmentInit
from ai.module.util import Util
from models import FileInfo, PageIdList

router = APIRouter()
util = Util()
initObj = DoucmentInit()


@router.post("/fileInfo/update", tags=['Function'])
async def uploadInFileInfo(fileInfo: FileInfo):
    fileInfo = {'file_id': 'file_id',
                'post_id': 'post_id',
                'upload_datetime': 'upload_datetime',
                'file_extension': 'pdf',
                'file_title': 'test',
                'path': '123341233412334',
                'user_id': 'user_id'}
    resDict = initObj.upload(fileInfo)
    resDict = util.convert_numpy_to_list(resDict)
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)


@router.post("/compFileInfo/update", tags=['Function'])
async def uploadInCompFileInfo(fileInfo: FileInfo):
    fileInfo = {'file_id': 'file_id',
                'post_id': 'post_id',
                'upload_datetime': 'upload_datetime',
                'file_extension': 'pdf',
                'file_title': 'test',
                'path': '123341233412334',
                'user_id': 'user_id'}
    resDict = initObj.addInCompDB(fileInfo)
    resDict = util.convert_numpy_to_list(resDict)
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)


@router.post("/compFileInfo/get/pageId", tags=['Function'])
async def getContentsFromCompPageInfo(pageIdList: PageIdList):
    # print(pageIdList.page_id_list)
    # pageIdList = ["891e0716-37af-11ee-bdab-56cc850cf3c0",
    #               "891e0770-37af-11ee-bdab-56cc850cf3c0"]
    resDict = initObj.getContentsFromCompDB(pageIdList.page_id_list)
    resDict = util.convert_numpy_to_list(resDict)
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)
