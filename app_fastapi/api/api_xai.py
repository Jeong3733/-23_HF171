from fastapi import APIRouter

router = APIRouter()


@router.get("/", tags=["XAI"])
async def firstss_get():
    return {'result': 'test'}
