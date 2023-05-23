from transformers import AutoTokenizer, AutoModel
import numpy as np
import torch
import pandas as pd


class Text2Vector:
    def __init__(self):
        self.tokenizer = AutoTokenizer.from_pretrained(
            "beomi/KcELECTRA-base-v2022")
        self.model = AutoModel.from_pretrained(
            "beomi/KcELECTRA-base-v2022")

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
        #             'text': vector,
        #             'page': {1: vector, 2: vector}}
        """
        resInfo = {'path': docInfo['path'],
                   'text': '',
                   'page': {}}

        for page_num, text in docInfo['page'].items():
            resInfo['page'][page_num] = self._get_embeddings(
                texts=[text])

        # print([docInfo['text']])
        resInfo['text'] = self._get_embeddings(
            texts=[docInfo['text']])
        return resInfo

    def _get_embeddings(self, texts: list) -> list:
        """
        Get BERT embeddings for input texts.

        Args:
            texts: List of strings to embed.

        Returns:
            List of BERT embeddings as numpy arrays.
        """
        encoded_input = self.tokenizer(
            texts, padding=True, truncation=True, return_tensors='pt')
        with torch.no_grad():
            model_output = self.model(**encoded_input)
            embeddings = model_output.last_hidden_state[:, 0, :].numpy()
        return embeddings


if __name__ == '__main__':
    t2v = Text2Vector()

    docInfo = {}

    docInfo = t2v.run(docInfo=docInfo)
