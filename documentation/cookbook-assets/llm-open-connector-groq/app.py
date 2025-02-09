import os
import requests
from flask import Flask, request, jsonify, send_from_directory, Request
from flask_cors import CORS
from dotenv import load_dotenv
from werkzeug.exceptions import BadRequest

load_dotenv()


class ForceJSONRequest(Request):
    def on_json_loading_failed(self, e):
        if e is None:
            return {}
        return super().on_json_loading_failed(e)


class CustomFlask(Flask):
    request_class = ForceJSONRequest


app = CustomFlask(__name__)
CORS(app)  # This will enable CORS for all routes

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"
APP_API_KEY = os.getenv("APP_API_KEY", "your-api-key-here")  # Set default if not in env


def check_api_key():
    api_key = request.headers.get("api-key") or request.headers.get("Api-Key")
    if api_key != APP_API_KEY:
        return jsonify({"error": "Invalid or missing API key"}), 401
    return None


@app.route("/")
def home():
    return send_from_directory(".", "index.html")


@app.route("/chat/completions", methods=["POST"])
def create_chat_completion():
    error_response = check_api_key()
    if error_response:
        return error_response

    data = request.get_json(force=True)

    groq_payload = {
        "messages": data["messages"],
        "model": "llama3-8b-8192",
        "max_tokens": data.get("max_tokens", 500),
        "temperature": data.get("temperature", 1.0),
        "n": data.get("n", 1),
    }

    try:
        response = requests.post(
            GROQ_API_URL,
            headers={"Authorization": f"Bearer {GROQ_API_KEY}"},
            json=groq_payload,
        )
        response.raise_for_status()
    except requests.RequestException as e:
        error_message = f"Error calling Groq API: {str(e)}"
        return jsonify({"error": {"message": error_message, "type": "api_error"}}), 500

    try:
        groq_response = response.json()
    except ValueError:
        return (
            jsonify(
                {
                    "error": {
                        "message": "Invalid JSON response from Groq API",
                        "type": "api_error",
                    }
                }
            ),
            500,
        )

    # Remove logprobs from choices
    choices = groq_response["choices"]
    for choice in choices:
        choice.pop("logprobs", None)

    # Simplify the usage information
    simplified_usage = {
        "completion_tokens": groq_response["usage"]["completion_tokens"],
        "prompt_tokens": groq_response["usage"]["prompt_tokens"],
        "total_tokens": groq_response["usage"]["total_tokens"],
    }

    return (
        jsonify(
            {
                "id": groq_response["id"],
                "object": "chat.completion",
                "created": groq_response["created"],
                "model": "llama3-8b-8192",
                "choices": choices,
                "usage": simplified_usage,
            }
        ),
        200,
    )


if __name__ == "__main__":
    app.run(debug=True)
