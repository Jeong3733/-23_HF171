import os
import logging

from ai.module.util import FileUtil
from ai.module.extract_info import PPTInfoExtract, DOCXInfoExtract, PDFInfoExtract
from ai.module.image_classification import ImageClassification
from ai.module.img2text import OCR, Captioning
from ai.module.text_preprocessing import TextPreprocessing
from ai.module.text2vector import Text2Vector


class Doc2Vector:
    """Class for document vectorization."""

    def __init__(self) -> None:
        """Constructor method."""
        pass

    def run(self, path: str) -> dict:
        """Run the document vectorization process.

        Args:
            path (str): Path to the document.

        Returns:
            dict: Document vectorization information.
        """
        file_extension = path.split('.')[-1]

        # (0) File upload
        logging.info('# (0) File upload')
        file_util = FileUtil()
        file_util.input_files_update()

        # (2) Extract text and images from documents
        logging.info('# (2) Extract text and images from document')
        if file_extension in ['pptx', 'ppt']:
            extract_info = PPTInfoExtract()
        elif file_extension == 'docx':
            extract_info = DOCXInfoExtract()
        elif file_extension == 'pdf':
            extract_info = PDFInfoExtract()
        else:
            return {'status': 'error'}
        info_dict = extract_info.run(path)

        # (3) Image type classification and image2text
        logging.info('# (3) Image type classification')
        img_classifier = ImageClassification()
        ocr = OCR()
        captioning = Captioning()

        for _, typedata in info_dict.items():
            typedata['img2text'] = []
            for img_path in typedata['img']:
                # Classification model X, img_type always 1
                img_type = img_classifier.run(img_path=img_path)

                if img_type == 1:  # 1: table and process (OCR)
                    text = ocr.run(img_path=img_path)
                elif img_type == 2:  # 2: Picture (ImageCaptioning)
                    text = captioning.run(img_path=img_path)
                typedata['img2text'].append(text)

        # (4) Combine text
        doc_info = {'path': path, 'text': '', 'page': {}}

        for page_num, typedata in info_dict.items():
            page_text = ' '.join(typedata['text']) + ' '.join(typedata['img2text'])
            doc_info['page'][page_num] = page_text

        for _, text in doc_info['page'].items():
            doc_info['text'] += text

        # (5) Text preprocessing
        logging.info('# (5) Text preprocessing')
        text_preprocessing = TextPreprocessing()
        doc_info = text_preprocessing.run(doc_info=doc_info)

        # (6) Vectorize BERT documents
        logging.info('# (6) Vectorize BERT documents')
        text2vector = Text2Vector()
        doc_info = text2vector.run(doc_info=doc_info)

        return doc_info


def main():
    logging.basicConfig(level=logging.INFO)

    process = Doc2Vector()
    path = "test.pptx"
    result = process.run(path)
    print(result)


if __name__ == '__main__':
    main()
