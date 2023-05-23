from fastapi import APIRouter
from typing import Union

from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
router = APIRouter()


@router.get("/test_1", tags=["Image"])
async def check():
    return {'result':'test'}


@router.get("/test_2", tags=["Image"])
async def first_get():
    resDict = {'result':'test'}
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)


@router.post("/items/{item_id}", tags=['Image'])
async def read_item(item_id: str, q: Union[str, None] = None):
    if q:
        resDict = {"item_id": item_id, "q": q}
    else:
        resDict = {"item_id": item_id}
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)