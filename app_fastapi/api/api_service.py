from fastapi import APIRouter

from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import FileRequest

router = APIRouter()


@router.post("/input", tags=["SERVICE"])
async def file_checking(request: FileRequest):
    request.file_path

    resDict = request.dict()
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)


@router.post("/test", tags=["SERVICE"])
async def file_checking(request: FileRequest):
    resDict = request.dict()
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)
