from flask import Flask, request, jsonify
from views import views
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route("/")
@cross_origin()
def home():
    return "<h1>Home</h1>."


@app.route("/data", methods=['GET', 'POST'])
@cross_origin()
def data():
    if request.method == 'GET':
        return "GET /data"
    if request.method == 'POST':
        # POST request body
        post_data = request.json['message']
        return post_data


if __name__ == '__main__':
    app.run(debug=True)
