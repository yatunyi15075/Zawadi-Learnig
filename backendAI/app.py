from flask import Flask, request, jsonify
import speech_recognition as sr

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

