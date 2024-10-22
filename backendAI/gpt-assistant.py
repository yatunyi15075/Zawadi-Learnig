import speech_recognition as sr
import openai
import pyttsx3
import time

# set OPEN AI key

# initiate the text-to-speech engine
engine = pyttsx3.init()

def transcribe_audio_to_text(filename):
    recognizer = sr.Recognizer()
    with sr.AudioFile(filename) as source:
        audio = recognizer.record(source)
    try:
        return recognizer.recognize_google(audio)
    except Exception as e:
        print(f'Skipping unknown error: {e}')
        return None

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
    recognizer = sr.Recognizer()
    while True:
        print("Say 'genius' to start recording your question...")
        with sr.Microphone() as source:
            audio = recognizer.listen(source)
            try:
                transcription = recognizer.recognize_google(audio)
                if transcription.lower() == "genius":
                    print("Do you want to ask a question? Say 'yes' to continue or 'no' to cancel.")
                    confirmation_audio = recognizer.listen(source)
                    confirmation = recognizer.recognize_google(confirmation_audio)
                    if confirmation.lower() == "yes":
                        filename = "input.wav"
                        print("Say your question...")
                        with sr.Microphone() as source:
                            source.pause_threshold = 1
                            audio = recognizer.listen(source, phrase_time_limit=None, timeout=None)
                            with open(filename, "wb") as f:
                                f.write(audio.get_wav_data())

                            # Transcribe audio to text
                            text = transcribe_audio_to_text(filename)
                            if text:
                                print(f"You said: {text}")

                                # Generate response using GPT-3
                                response = generate_response(text)
                                print(f"GPT-3 says: {response}")

                                # Read response using text-to-speech
                                speak_text(response)
                elif transcription.lower() == "stop":
                    print("Exiting...")
                    break
            except Exception as e:
                print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
