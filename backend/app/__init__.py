from flask_cors import CORS
from flask import Flask

app = Flask(__name__)
CORS(app)

# User login/signup routes
@app.route("/login")
def login():
    # Get user data from login

    # return an object with a unique token ID
    return ""

@app.route("/sign_up")
def sign_up():
    # Get user data from sign_up

    # Return a response object with corresponding error code

    return ""

# Item Listing routes
@app.route("get_all")
def get_all():
    # Return list of all listings

    return ""

@app.route("get_item")
def get_item():
    # Using the ID get tuple of that element

    # Return a single tuple of the object
    return ""