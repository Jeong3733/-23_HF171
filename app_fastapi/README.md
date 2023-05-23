# fastapi

## init

### 01. 위치 이동

- protoype -> protoype/app_fastapi

  ```zsh
  cd app_fastapi
  ```

### 02. 파이썬 가상환경 세팅

> 윈도우는 잘 몰라요

- python 가상환경 생성 (python 3.9.6 기준)

  ```zsh
  python -m venv .venv
  ```

- activate 파일 생성

  - mac 기준

    ```zsh
    touch activate
    ```

  - windows 기준

    ```zsh
    type nul > activate
    ```

- activate 파일 내에 내용 추가

  - mac 기준

    ```zsh
    source .venv/bin/activate
    ```

  - windows 기준

    ```zsh
    .venv/Scripts/activate
    ```

- 가상한경 실행

  - mac 기준

    ```zsh
    source activate
    ```

  - windows 기준

    ```zsh
    activate
    ```

- pip 패키지 설치

  ```zsh
  python -m pip install --upgrade pip
  pip install -r requirements.txt
  ```

### 03. FastAPI 실행

> 실행 전 activate 파일 실행

- FastAPI 실행

  ```zsh
  uvicorn main:app --reload
  ```

- FastAPI Docs 확인

  - http://127.0.0.1:8000/docs 접속

## API

### Document 2 Vector

- database/data/input 에 파일 넣기
  > 현재 pptx 파일만 가능
- <img width="1356" alt="image" src="https://github.com/KimTaekGwan/protoype/assets/51080266/c9328a11-0bca-4a7d-b9ca-f0de60d7f8b6">
