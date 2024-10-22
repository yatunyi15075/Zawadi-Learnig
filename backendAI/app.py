from flask import Flask, request, jsonify
import speech_recognition as sr
import openai
import pyttsx3
import time

# set OPEN AI key
openai.api_key = "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"

# initiate the text-to-speech engine
engine = pyttsx3.init()

app = Flask(__name__)

@app.route('/api/sound-to-text', methods=['POST'])
def sound_to_text():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    recognizer = sr.Recognizer()

    # Use audio file directly from file-like object (BytesIO)
    with sr.AudioFile(file) as source:
        audio = recognizer.record(source)
    
    try:
        text = recognizer.recognize_google(audio)
        return jsonify({"text": text})
    except sr.UnknownValueError:
        return jsonify({"error": "Could not understand the audio"}), 400

if __name__ == '__main__':
    app.run(port=5001, debug=True)



def transcribe_audio_to_text(filename):
    recognizer = sr.Recognizer()
    with sr.AudioFile(filename) as source:
        audio = recognizer.record(source)
    try:
        return recognizer.recognize_google(audio)
    except:
        print('Skipping unknown error')

def generate_response(prompt):
    try:
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=4000,
            n=1,
            temperature=0.5,
        )
        return response["choices"][0]["text"]
    except Exception as e:
        print(f"Error generating OpenAI response: {e}")
        return "I'm sorry, I couldn't process your request."

def speak_text(text):
    engine.say(text)
    engine.runAndWait()


def main():
    while True:
        # wait for user to say "ganious"
        print("Say Genious to start recording your question...")
        with sr.Microphone() as source:
            recognizer = sr.Recognizer()
            audio = recognizer.listen(source)
            try:
                transcription = recognizer.recognize_google(audio)
                if transcription.lower() == "genius":
                    #record audion
                    filename = "input.wav"
                    print("Say your question...")
                    with sr.Microphone() as source:
                        recognizer = sr.Recognizer()
                        source.pause_threshold = 1
                        audio = recognizer.listen(source, phrase_time_limit=None, timeout=None) 
                        with open(filename, "wb") as f:
                            f.write(audio.get_wav_data())

                            #Transcibe audio to text
                            text = transcribe_audio_to_text(filename)
                            if text:
                                print(f"You said {text}")

                                #Generate response using GPT-3
                                response = generate_response(text)
                                print(f"GPT-3 says: {response}")

                                #Read response using text-to speech
                                speak_text(response)
            except Exception as e:
                print("An error occurred: {}".format(e))

if __name__ == "_main__":
    main()


