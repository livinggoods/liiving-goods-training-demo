import datetime
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)

CORS(app, supports_credentials=True)

@app.route('/')
@cross_origin()
def get_tasks():
    return jsonify(
        msg="Hello I am backend!",
        time=datetime.datetime.now()
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
