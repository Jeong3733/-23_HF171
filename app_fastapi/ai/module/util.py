import os
import shutil

import json
import numpy as np


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


class NumpyEncoder(json.JSONEncoder):
    """ Custom encoder for numpy data types """

    def default(self, obj):
        if isinstance(obj, (np.int_, np.intc, np.intp, np.int8,
                            np.int16, np.int32, np.int64, np.uint8,
                            np.uint16, np.uint32, np.uint64)):

            return int(obj)

        elif isinstance(obj, (np.float_, np.float16, np.float32, np.float64)):
            return float(obj)

        elif isinstance(obj, (np.complex_, np.complex64, np.complex128)):
            return {'real': obj.real, 'imag': obj.imag}

        elif isinstance(obj, (np.ndarray,)):
            return obj.tolist()

        elif isinstance(obj, (np.bool_)):
            return bool(obj)

        elif isinstance(obj, (np.void)):
            return None

        return json.JSONEncoder.default(self, obj)


class Util:
    def __init__(self) -> None:
        pass

    # 재귀적으로 dict 내부의 numpy 배열을 리스트로 변환하는 함수
    def convert_numpy_to_list(self, obj):
        if isinstance(obj, dict):
            for key, value in obj.items():
                obj[key] = self.convert_numpy_to_list(value)
        elif isinstance(obj, np.ndarray):
            obj = obj.tolist()
        return obj


if __name__ == '__main__':
    fileutil = FileUtil()
    fileutil.input_files_update()
