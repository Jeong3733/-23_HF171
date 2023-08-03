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
            'n_similar': 3
        },
        'DoucmentInit':
        {
            's3_bucket': 'competition-file-list',
            'docVectorDB_directory': 'docVectorDBs',
            'analyticsReport_format': """format""",
            'compVectorDB_directory': 'compVectorDB'
        }
    }
