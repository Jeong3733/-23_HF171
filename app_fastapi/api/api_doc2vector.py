from fastapi import APIRouter

from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from ai.module.doc2vector import Doc2Vector
from ai.module.util import Util

router = APIRouter()


@router.post("/{file_name}", tags=['Document'])
async def document2vector(file_name: str):
    process = Doc2Vector()
    resDict = process.run(file_name)

    util = Util()
    resDict = util.convert_numpy_to_list(resDict)
    resJson = jsonable_encoder(resDict)
    return JSONResponse(content=resJson)
