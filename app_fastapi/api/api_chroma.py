from fastapi import APIRouter

from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from ai.module.doc2vector import Doc2Vector
from ai.module.util import Util
from ai.vectorDB.manage_chroma import Initdb
from api.api_doc2vector import document2vector

import os

router = APIRouter()

db = Initdb()
util = Util()


@router.post("/add/{file_name}", tags=['Chroma'])
async def add_file(file_name: str):
    try:
        name, _ = os.path.splitext(file_name)
        process = Doc2Vector()
        resDict = process.run(file_name)

        resDict = util.convert_numpy_to_list(resDict)
        param = {'path': file_name, 'file_name': name}
        db.db_add(resDict['text'], name, param, name)
        return JSONResponse(content={'cond': True})
    except:
        return JSONResponse(content={'cond': False})


@router.post("/query/{file_name}", tags=['Chroma'])
async def query_file(file_name: str):
    name, ext = os.path.splitext(file_name)
    process = Doc2Vector()
    resDict = process.run(file_name)

    resDict = util.convert_numpy_to_list(resDict)
    query_result = db.query(resDict['text'])
    resJson = jsonable_encoder(query_result)
    return JSONResponse(content=resJson)
