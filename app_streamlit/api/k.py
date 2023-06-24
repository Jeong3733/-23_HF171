import aiohttp
import asyncio


async def req_doc2vec(file_name):
    headers = {'accept': 'application/json',
               'Content-Type': 'application/json'}
    url = f'http://127.0.0.1:8000/doc2vec/{file_name}'

    async with aiohttp.ClientSession() as session:
        async with session.post(url, headers=headers) as response:
            rescode = response.status

            if rescode == 200:
                res = await response.json()
                return rescode, res
            else:
                return rescode, False


async def req_add_vector(file_name):
    headers = {'accept': 'application/json',
               'Content-Type': 'application/json'}
    url = f'http://127.0.0.1:8000/chroma/add/{file_name}'

    async with aiohttp.ClientSession() as session:
        async with session.post(url, headers=headers) as response:
            rescode = response.status

            if rescode == 200:
                res = await response.json()
                return rescode, res
            else:
                return rescode, False


async def req_search_db(file_name):
    headers = {'accept': 'application/json',
               'Content-Type': 'application/json'}
    url = f'http://127.0.0.1:8000/chroma/query/{file_name}'

    async with aiohttp.ClientSession() as session:
        async with session.post(url, headers=headers) as response:
            rescode = response.status

            if rescode == 200:
                res = await response.json()
                return rescode, res
            else:
                return rescode, False


async def add_multi(files):
    tasks = []
    for file in files:
        tasks.append(req_add_vector(file))

    results = await asyncio.gather(*tasks)
    print(results)


# 이벤트 루프 생성 및 비동기 함수 실행
loop = asyncio.get_event_loop()
loop.run_until_complete(add_multi(files))
