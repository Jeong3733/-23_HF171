import whisper

class STT:
    def __init__(self) -> None:
        pass
    def run(self):
        autdio_path = '/Users/ktg/Desktop/23_HF171/AI_TEST/data/test.mp3'
        model = whisper.load_model('base')
        result = model.transcribe(autdio_path)
        print(result)

def main():
    stt = STT()
    stt.run()
    
if __name__ == '__main__':
    main()
