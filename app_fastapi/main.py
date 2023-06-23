from fastapi import FastAPI
from api import (api_image, api_xai, api_nlp,
                 api_test, api_service, api_doc2vector,
                 api_chroma)

# from unicorn import UnicornMiddleware
from fastapi.middleware.cors import CORSMiddleware
# from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware


def include_router(app):
    app.include_router(api_image.router, prefix='/image')
    app.include_router(api_xai.router, prefix='/xai')
    app.include_router(api_nlp.router, prefix='/nlp')
    app.include_router(api_test.router, prefix='/test')
    app.include_router(api_service.router, prefix='/service')
    app.include_router(api_doc2vector.router, prefix='/doc2vec')
    app.include_router(api_chroma.router, prefix='/chroma')


def start_application():
    app = FastAPI()

    origins = ['*']
    # origins = [
    #     "http://localhost.tiangolo.com",
    #     "https://localhost.tiangolo.com",
    #     "http://localhost",
    #     "http://localhost:8080",
    # ]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    include_router(app)
    return app


app = start_application()
