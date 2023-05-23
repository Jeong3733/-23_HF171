from pptx import Presentation
from pptx.enum.shapes import MSO_SHAPE_TYPE

# from pdfminer.high_level import extract_text, extract_pages
# from pdfminer.layout import LTTextContainer
# import PyPDF2
# import fitz

from collections import defaultdict
from kiwipiepy import Kiwi

import re
import os
import shutil
from bs4 import BeautifulSoup

from ai.module.util import FileUtil


class ExtractInfo:
    def __init__(self) -> None:
        # self.tp = Text_Preprocessing()
        self.fileutil = FileUtil()
        self.kiwi = Kiwi()
        self.reset()

    def reset(self):
        self.file_name = None
        self.name = None
        self.ext = None
        self.text_dict = {'total': [], 'page': defaultdict(list)}
        self.link_list = []
        self.img_dict = defaultdict(list)
        self.text_info = None
        self.page_num = None
        self.img_num = 0
        self.image_blob = []
        self.pre_text = None


class PPT_Info_Extract(ExtractInfo):
    def __init__(self) -> None:
        super().__init__()

    def reset(self):
        super().reset()
        self.parsed = None

    def run(self, file_name):
        """_summary_

        Args:
            file_name (str): 문서 이름

        Returns:
            dict:
                page_num (int):
                    text (str): list
                    img (str): list
        """
        self._extract(file_name)
        res = {}
        texts = self.text_dict['page']
        imgs = self.img_dict

        pages = set(list(texts.keys()) + list(imgs.keys()))
        for page in range(min(pages), max(pages)+1):
            res[page] = {}
            res[page]['text'] = texts[page]
            res[page]['img'] = imgs[page]
        return res

    def _extract(self, file_name):
        # path = "deep_learning_intro.pptx"
        self.reset()
        self.file_name = file_name
        self.name, self.ext = os.path.splitext(file_name)
        path = self.fileutil.orignal_dir + file_name
        self.parsed = Presentation(path)

        for idx, slide in enumerate(self.parsed.slides):
            self.page_num = idx+1
            for shape in slide.shapes:
                self._group_check(shape)

        # self.last()
        # self.preprocessing()

    def last(self):
        res = []
        for text_ls in self.text_dict['page'].values():
            ls = []
            for text in text_ls:
                # print(text)
                pattern = 'http[s]?://(?:[a-zA-Z]|[0-9]|[$\-@\.&+:/?=]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+'
                links = re.findall(pattern, text)
                if links:
                    for link in links:
                        self.link_list.append(link)
                    text = re.sub(pattern=pattern, repl='', string=text)
                if text:
                    ls.append(text)
                    self.text_dict['total'].append(text)
            t = self.tp.preprocessing(' '.join(ls))
            if t:
                res.append(t)
        self.text_info = '\n'.join(res)

    def preprocessing(self):
        self.pre_text = ' '.join([t for t in self.text_info.split('\n') if t])

        self.pre_text = self.kiwi.space(self.pre_text)
        self.pre_text = BeautifulSoup(self.pre_text, 'html.parser').text
        self.pre_text = re.sub(
            r'[^ ㄱ-ㅣ가-힣]', '', self.pre_text)  # 특수기호 제거, 정규 표현식

        clean_words = []
        for token, pos, _, _ in self.kiwi.analyze(self.pre_text)[0][0]:
            if pos.startswith('N'):
                clean_words.append(token)
        self.pre_text = ' '.join(clean_words)

    def _group_check(self, shape):
        # 그룹 모형
        if shape.shape_type == MSO_SHAPE_TYPE.GROUP:
            for s in shape.shapes:
                self._info_extract(s)
        # 그룹 모형 아님
        else:
            self._info_extract(shape)

    def _info_extract(self, shape):
        if shape.shape_type == MSO_SHAPE_TYPE.GROUP:
            self._group_check(shape)
        else:
            # yes image
            if shape.shape_type == MSO_SHAPE_TYPE.PICTURE:
                image_blob = shape.image.blob

                # 이미지 중복 체크
                if image_blob not in self.image_blob:
                    ext = shape.image.ext  # - (확장명)
                    size = shape.image.size
                    if ext in ['png', 'jpeg', 'jpg'] and size[0] >= 200 and size[1] >= 200:
                        self.img_num += 1
                        num = str(self.img_num).zfill(3)
                        save_path = f"{self.fileutil.res_dir}{self.name}/image_{num}.{ext}"
                        with open(save_path, "wb") as file:
                            file.write(image_blob)
                        self.image_blob.append(image_blob)
                        self.img_dict[self.img_num].append(save_path)
            # no image
            else:
                # yes text
                if shape.has_text_frame:
                    if shape.text.strip() != "":
                        self.text_dict['page'][self.page_num].append(
                            shape.text.strip())


if __name__ == '__main__':
    # extractinfo = ExtractInfo()

    # path = ""

    # res = extractinfo.run(path)
    # print(os.listdir('db/data/input/'))
    fileutil = FileUtil()
    fileutil.input_files_update()

    ppt = PPT_Info_Extract()
    ppt.extract('1 Intro.pptx')
    # print(dict(ppt.text_dict['page']))
    # print(dict(ppt.img_dict))
    # print(ppt.run()[10])
