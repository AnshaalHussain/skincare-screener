from flask import Flask, request
from flask_cors import CORS, cross_origin

from webscraping import product_search

app = Flask(__name__)
CORS(app)


@app.route("/")
@cross_origin()
def home():
    return "Home"


@app.route("/data", methods=['POST'])
@cross_origin()
def data():
    if request.method == 'POST':
        # POST request body
        post_data = request.json['message']
        return product_search(post_data)


if __name__ == '__main__':
    app.run(debug=True)
