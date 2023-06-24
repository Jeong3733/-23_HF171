import requests
import json
import asyncio


def req_doc2vec(file_name):
    headers = {'accept': 'application/json',
               'Content-Type': 'application/json'}

    url = f'http://127.0.0.1:8000/doc2vec/{file_name}'
    r = requests.post(url, headers=headers)
    rescode = r.status_code

    if rescode == 200:
        res = r.json()
        return rescode, res
    else:
        return rescode, False


async def req_add_vector(file_name):
    headers = {'accept': 'application/json',
               'Content-Type': 'application/json'}

    url = f'http://127.0.0.1:8000/chroma/add/{file_name}'
    r = requests.post(url, headers=headers)
    rescode = r.status_code

    if rescode == 200:
        res = r.json()
        return rescode, res
    else:
        return rescode, False


async def req_multi_add(files):
    reqList = []
    resList = []
    for file in files:
        reqList.append(req_add_vector(file.name))
    for req in reqList:
        resList.append(await req)
    return resList


def req_search_db(file_name):
    headers = {'accept': 'application/json',
               'Content-Type': 'application/json'}

    url = f'http://127.0.0.1:8000/chroma/query/{file_name}'
    r = requests.post(url, headers=headers)
    rescode = r.status_code

    if rescode == 200:
        res = r.json()
        return rescode, res
    else:
        return rescode, False
