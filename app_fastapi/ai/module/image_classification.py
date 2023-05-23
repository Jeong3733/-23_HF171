class ImageClassification:
    def __init__(self) -> None:
        pass

    def run(self, img_path: str) -> int:
        """_summary_

        Args:
            img_path (str): 이미지 경로

        Returns:
            int: [0, 1, 2]
                0 : etc
                1 : 표 및 프로세스 (ocr)
                2 : 그림 (ImageCaptioning)
        """
        res = 1
        return res


if __name__ == '__main__':
    imgclsfc = ImageClassification()

    img_path = ""

    res = imgclsfc.run(img_path=img_path)
