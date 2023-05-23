from fastapi import APIRouter

from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

import numpy as np
from ai.module.util import Util

router = APIRouter()


@router.get("/check", tags=["NLP"])
async def gpu_check():
    resDict = {'result':np.array(['test'])}
    
    util = Util()
    resDict = util.convert_numpy_to_list(resDict)
    resJson = jsonable_encoder(resDict)
    
    return JSONResponse(content=resJson)