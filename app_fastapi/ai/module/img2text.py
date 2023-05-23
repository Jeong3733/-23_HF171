import os
from google.cloud import vision_v1


class OCR:
    def __init__(self) -> None:
        os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = \
            r'ai/module/google_cloud_python.json'
        pass

    def run(self, img_path: str) -> str:
        """_summary_

        Args:
            img_path (str): 이미지 경로

        Returns:
            str: 이미지에서 추출한 텍스트
        """
        res = self._detect_text(img_path)
        return res

    # 이미지에서 텍스트 추출 함수 정의
    def _detect_text(self, path):
        """Detects text in the file."""
        # print(path)
        client = vision_v1.ImageAnnotatorClient()

        with open(path, 'rb') as image_file:
            content = image_file.read()

        image = vision_v1.types.Image(content=content)
        response = client.text_detection(image=image)

        try:
            texts = response.text_annotations
            # print('texts', texts)
            # print('[0]', texts[0])
            # print('Texts:')
            # for text in texts:
            #     print(f'{text.description}')
            #     print('\\n"{}"'.format(text.description))

            output = texts[0].description
        except:
            output = ""

        return output


class Captioning:
    def __init__(self) -> None:
        pass

    def run(self, img_path: str) -> str:
        """_summary_

        Args:
            img_path (str): 이미지 경로

        Returns:
            str: 이미지에서 텍스트로 변환 결과
        """
        res = ""
        return res


if __name__ == '__main__':
    print(os.getcwd())
    ocr = OCR()
    captioning = Captioning()

    img_path = "/Users/ktg/Desktop/protoype/db/data/image/1 Intro/image_003.png"

    res = ocr.run(img_path=img_path)
    print(res)
    res = captioning.run(img_path=img_path)
