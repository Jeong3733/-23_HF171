import re


class TextPreprocessing:
    def __init__(self) -> None:
        self.punct = "/-'?!.,#$%\'()*+-/:;<=>@[\\]^_`{|}~" + \
            '""“”’' + '∞θ÷α•à−β∅³π‘₹´°£€\×™√²—–&'
        self.mapping = {"‘": "'", "₹": "e", "´": "'", "°": "",
                        "€": "e", "™": "tm", "√": " sqrt ", "×": "x", "²": "2",
                        "—": "-", "–": "-", "’": "'", "_": "-", "`": "'", '“': '"', '”': '"',
                        '“': '"', "£": "e", '∞': 'infinity', 'θ': 'theta', '÷': '/', 'α': 'alpha',
                        '•': '.', 'à': 'a', '−': '-', 'β': 'beta', '∅': '', '³': '3', 'π': 'pi', }
        self.specials = {'\u200b': ' ', '…': ' ... ',
                         '\ufeff': '', 'करना': '', 'है': ''}

    def run(self, docInfo: dict) -> dict:
        """_summary_

        Args:
            docInfo (dict): _description_
        #  docInfo = {'path': path,
        #            'text': text,
        #            'page': {1: text, 2: text}}

        Returns:
            dict: _description_
        #  resInfo = {'path': path,
        #            'text': text,
        #            'page': {1: text, 2: text}}
        """
        resInfo = {'path': docInfo['path'],
                   'text': '',
                   'page': {}}

        for page_num, text in docInfo['page'].items():
            resInfo['page'][page_num] = self._preprocssing(text=text)

        resInfo['text'] = self._preprocssing(text=docInfo['text'])

        return resInfo

    def _preprocssing(self, text: str) -> str:
        """_summary_

        Args:
            text (str): 전처리 전 텍스트

        Returns:
            str: 전처리 후 텍스트
        """
        text = self._clean(text)
        text = self._clean_str(text)
        text = self._token(text)
        return text

    def _clean(self, text):
        for p in self.mapping:
            text = text.replace(p, self.mapping[p])

        for p in self.punct:
            text = text.replace(p, f' {p} ')

        for s in self.specials:
            text = text.replace(s, self.specials[s])
        return text.strip()

    def _clean_str(self, text):
        # pattern = '([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)' # E-mail제거
        # text = re.sub(pattern=pattern, repl='', string=text)
        pattern = '(http|ftp|https)://(?:[-\w.]|(?:%[\da-fA-F]{2}))+'  # URL제거
        text = re.sub(pattern=pattern, repl='', string=text)
        pattern = '([ㄱ-ㅎㅏ-ㅣ]+)'  # 한글 자음, 모음 제거
        text = re.sub(pattern=pattern, repl='', string=text)
        pattern = '<[^>]*>'         # HTML 태그 제거
        text = re.sub(pattern=pattern, repl='', string=text)
        pattern = '[^\w\s\n]'         # 특수기호제거
        text = re.sub(pattern=pattern, repl='', string=text)
        text = re.sub(
            '[-=+,#/\?:^$.@*\"※~&%ㆍ!』\\‘|\(\)\[\]\<\>`\'…》]', ' ', string=text)
        text = re.sub('\n', ' ', string=text)
        return text

    def _token(self, text) -> list:
        ls = [t.strip() for t in text.split(' ') if t]
        res = ' '.join(ls)
        return res


if __name__ == '__main__':
    textprepro = TextPreprocessing()

    docInfo = {}

    docInfo = textprepro.run(docInfo=docInfo)
