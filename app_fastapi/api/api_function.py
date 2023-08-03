from fastapi import APIRouter

from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from ai.module.function import DoucmentInit
from ai.module.util import Util

router = APIRouter()
util = Util()


@router.post("/{file_name}", tags=['Function'])
async def upload(file_name: str):
    fileInfo = {'file_id': 'file_id',
                'post_id': 'post_id',
                'upload_datetime': 'upload_datetime',
                'file_extension': 'pdf',
                'file_title': 'test',
                'path': '12334',
                'user_id': 'user_id'}
    initObj = DoucmentInit()
    resDict = initObj.upload(fileInfo)
    resDict = util.convert_numpy_to_list(resDict)
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)
