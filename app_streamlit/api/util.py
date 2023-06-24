import os
import shutil

import streamlit as st


class FileUtil:
    def __init__(self) -> None:
        # print(os.getcwd())
        self.input_dir = '../database/data/input/'
        self.res_dir = '../database/data/image/'
        self.orignal_dir = '../database/data/original/'

    def input_files_update(self):
        for file_name in os.listdir(self.input_dir):
            # print(file_name)
            self._dir_Update(file_name)

    def _dir_Update(self, file_name):
        name, ext = os.path.splitext(file_name)
        input_path = os.path.join(self.input_dir, file_name)
        img_path = os.path.join(self.res_dir, name)
        data_path = os.path.join(self.orignal_dir, file_name)

        if ext == '.md':
            return

        if os.path.isfile(data_path):
            with open(input_path, 'rb') as input_file, open(data_path, 'rb') as data_file:
                input_content = input_file.read()
                data_content = data_file.read()
                if input_content == data_content:
                    print(f"{file_name} already exists")
                else:
                    # file 이름 변경 후 다시 재귀하기
                    print(f"{file_name} 이름이 같은 파일이 존재 - 이름을 변경해서 올려주세요")
                    # os.rename()
        else:
            os.makedirs(img_path)
            shutil.move(input_path, self.orignal_dir)


# 디렉토리와 파일을 주면, 해당 디렉토리에 파일을 저장하는 함수!!
def save_uploaded_file(directory, files):
    try:
        for file in files:
            # 1. 디렉토리가 있는지 확인하여, 없으면 만든다.
            if not os.path.exists(directory):
                os.makedirs(directory)
            # 2.이제는 디렉토리가 있으니, 파일을 저장
            with open(os.path.join(directory, file.name), 'wb') as f:
                f.write(file.getbuffer())
        fileutil = FileUtil()
        fileutil.input_files_update()
        return True
    except:
        return False
