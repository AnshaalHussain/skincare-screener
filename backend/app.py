from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import asyncio

# from webscraping import product_search
from pyppeteer_script import product_search

app = Flask(__name__)
CORS(app)


@app.route("/")
@cross_origin()
def home():
    return "<h1>Home</h1>."


@app.route("/data", methods=['GET', 'POST'])
@cross_origin()
def data():
    # if request.method == 'GET':
    #     return product_search("canmake cream cheek")
    if request.method == 'GET':
        return product_search("canmake uv gel")
    if request.method == 'POST':
        # POST request body
        post_data = request.json['message']
        # return product_search(post_data)
        return product_search("canmake cream cheek")


if __name__ == '__main__':
    app.run(debug=True)
