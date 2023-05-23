from fastapi import APIRouter

from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

# from conn.mysql import db
from models import FileRequest

router = APIRouter()


@router.get("/", tags=['TEST'])
async def root():
    return {"msg": "Hello World"}


@router.get("/db", tags=['TEST'])
async def root():
    return {"msg": "Hello World"}


@router.post("/data", tags=["TEST"])
async def file_checking(request: FileRequest):
    resDict = request.dict()
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)
