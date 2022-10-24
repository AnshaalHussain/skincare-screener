from flask import Flask, request
from views import views
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route("/")
@cross_origin()
def home():
    return "this isnt not the home page"


@app.route("/data", methods=['GET', 'POST'])
@cross_origin()
def data():
    if request.method == 'POST':
        print(request.json['message'])
        return "this is the data page"
    else:
        return "this isn't the data page"


if __name__ == '__main__':
    app.run(debug=True)
