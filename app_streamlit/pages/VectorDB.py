import streamlit as st

import time
import numpy as np
import pandas as pd
import os
import asyncio

from api.request_fastapi import req_multi_add


from api.util import save_uploaded_file
from api.request_fastapi import (req_doc2vec,
                                 req_add_vector,
                                 req_search_db)
from api.manage_vetcordb import Initdb
# Input Layout 생성


def createInputLayout(elements):
    files = st.file_uploader('파일 선택(csv or excel)',
                             type=['pdf', 'pptx', 'ppt'],
                             accept_multiple_files=True)
    uploaded = False
    if files is not None:
        if st.button('db 저장', key='save'):
            uploaded = save_uploaded_file(path_database_input, files)
            if uploaded:
                st.success('Saved file: in ')
        if st.button('vetor_db 추가', key='add'):
            with st.spinner('추가 중'):
                resList = asyncio.run(req_multi_add(files))


#############################################
page_title = 'VecotorDB'
page_icon = '😃'

st.set_page_config(page_title=page_title,
                   layout='wide',
                   page_icon=page_icon
                   )

last_params = {
    # '결과': None,
}
elements = last_params.copy()
path_database_input = '../database/data/input'
chroma_db = Initdb()

#############################################
# 사이드바

#############################################
# 본문

# 제목
st.markdown(f"# {page_title} {page_icon}")

# InputLayout
createInputLayout(elements)
