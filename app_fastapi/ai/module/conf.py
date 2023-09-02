config = \
    {
        'NewChroma':
            {'DEFAULT_K': 4},
        'AI':
        {
            'chunk_size': 1000,
            'chunk_overlap': 100,
            'encoding_name': 'p50k_base',
            'persist_directory': None,
            'n_similar': 3,
            's3_bucket': 'ict-competition-file-list',
            'save_path': 'dummy_data',
            'system_message_prompt': 'You are an expert in plagiarism check analysis. You ran a plagiarism check and found that it is similar to certain comparison documents: three inverted quotes, each text separated by three quotation marks, part of the checked document, part of the comparison document. Output a Korean report of the analysis results.',
            'format_prompt': '### Output:\n\"\"\"1.\n2.\n...\"\"\"',
                },
        'DoucmentInit':
        {
            'docVectorDB_directory': 'vectorDB/docVectorDBs',
            'competitionVectorDB_directory': 'vectorDB/competitionVectorDBs',
            'analyticsReportFormat': """당신은 표절 검사 분석 전문가입니다. 표절 검사를 진행한 결과, 특정 비교 문서와 유사하다는 결과가 나왔습니다. \
                세 개의 역 따옴표, 세 개의 따옴표, 세 개의 큰 따옴표로 구분된 각 텍스트들은 검사 문서 중 일부분,비교 문서 중 일부분, 분석 결과 보고서 포맷입니다.\
                    분석 결과 보고서 작성해주세요.""",
            'analyticsReportFormat': """format""",
            'compVectorDB_directory': 'vectorDB/compVectorDB'
                }
    }

# 당신은 표절 검사 분석 전문가입니다. 표절 검사를 진행한 결과, 특정 비교 문서와 유사하다는 결과가 나왔습니다. 세 개의 역 따옴표, 세 개의 따옴표, 세 개의 큰 따옴표로 구분된 각 텍스트들은 검사 문서 중 일부분, 비교 문서 중 일부분, 분석 결과 보고서 포맷입니다. 분석 결과 보고서를 한국어로 작성해주세요.
# You are an expert in plagiarism check analysis. You have run a plagiarism check and found similarities to certain comparison documents. The following text, separated by three inverted quotation marks, three quotation marks, and three double quotation marks, is part of the checked document, part of the comparison document, and the format of the analysis report. Please write the analysis result report in Korean.
