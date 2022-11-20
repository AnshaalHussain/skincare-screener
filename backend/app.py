from flask import Flask, request, jsonify
import requests
from views import views
from flask_cors import CORS, cross_origin

from webscraping import product_search

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
        return product_search("canmake cream cheek")
    if request.method == 'POST':
        # POST request body
        post_data = request.json['message']
        return product_search(post_data)


# @app.route("/skincare")
# @cross_origin()
# def skincare():
#     data = requests.get('https://skincare-api.herokuapp.com/products').content
#     return data


if __name__ == '__main__':
    app.run(debug=True)
