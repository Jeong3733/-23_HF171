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
        },
        'DoucmentInit':
        {
            'docVectorDB_directory': 'vectorDB/docVectorDBs',
            'analyticsReportFormat': """당신은 표절 검사 분석 전문가입니다. 표절 검사를 진행한 결과, 특정 비교 문서와 유사하다는 결과가 나왔습니다. \
                세 개의 역 따옴표, 세 개의 따옴표, 세 개의 큰 따옴표로 구분된 각 텍스트들은 검사 문서 중 일부분,비교 문서 중 일부분, 분석 결과 보고서 포맷입니다.\
                    분석 결과 보고서 작성해주세요.""",
            'analyticsReportFormat': """format""",
            'compVectorDB_directory': 'vectorDB/compVectorDB'
        }
    }
