import speech_recognition as sr
import openai
import pyttsx3
import os
from dotenv import load_dotenv

# Load your environment variables 
load_dotenv()

# Set OpenAI API key
openai.api_key = 'os.getenv("OPENAI_API_KEY")'

print(f"OpenAI API Key: {openai.api_key}") 

# Initiate the text-to-speech engine
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
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo", 
            messages=[{"role": "user", "content": prompt}],
            max_tokens=4000,
            temperature=0.5,
        )
        return response.choices[0].message['content'].strip()
    except Exception as e:
        print(f"Error generating OpenAI response: {e}")
        return "I'm sorry, I couldn't process your request."

def speak_text(text):
    engine.say(text)
    engine.runAndWait()

def main():
    recognizer = sr.Recognizer()
    while True:
        print("Say 'genius' to start recording your question, or 'stop' to exit...")
        with sr.Microphone() as source:
            recognizer.adjust_for_ambient_noise(source, duration=0.5)  # Adjust for ambient noise
            audio = recognizer.listen(source, phrase_time_limit=5, timeout=5)  # Add time limits
            try:
                transcription = recognizer.recognize_google(audio).lower()
                if transcription == "genius":
                    print("Do you want to ask a question? Say 'yes' to continue or 'no' to cancel.")
                    with sr.Microphone() as source:  # New session for confirmation
                        recognizer.adjust_for_ambient_noise(source, duration=0.5)
                        confirmation_audio = recognizer.listen(source)
                        confirmation = recognizer.recognize_google(confirmation_audio).lower()
                    
                    if confirmation == "yes":
                        filename = "input.wav"
                        print("Say your question now...")
                        with sr.Microphone() as source:
                            source.pause_threshold = 0.5  # Reduce threshold for better response time
                            audio = recognizer.listen(source, phrase_time_limit=None, timeout=None)
                            with open(filename, "wb") as f:
                                f.write(audio.get_wav_data())

                            text = transcribe_audio_to_text(filename)
                            if text:
                                print(f"You said: {text}")

                                response = generate_response(text)
                                print(f"GPT says: {response}")

                                speak_text(response)
                    else:
                        print("Question canceled.")
                
                elif transcription == "stop":
                    print("Exiting...")
                    break
                
                else:
                    print("Command not recognized, say 'genius' or 'stop'.")
                    
            except sr.UnknownValueError:
                print("Sorry, I didn't catch that. Please try again.")
            except sr.RequestError as e:
                print(f"Could not request results; {e}")
            except Exception as e:
                print(f"An error occurred: {e}")
                continue

if __name__ == "__main__":
    main()
