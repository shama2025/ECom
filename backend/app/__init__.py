from flask_cors import CORS
from flask import Flask, request, jsonify
import secrets
from collections import namedtuple
from util.login import login_user
from util.sign_up import check_user_email, create_user
from util.single_listing import get_single_listing
from util.all_listings import get_all_listings

app = Flask(__name__)
CORS(app)


@app.route("/login", methods=["POST"])
def login():
    # Get user data from login
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    login_dict = login_user(email, password)

    # Login is successful
    if login_dict["code"] == 200:
        token = secrets.token_urlsafe(32)

        return jsonify({"login_dict": login_dict, "token": token}), 200
    # Login failed
    else:
        return jsonify({"login_dict": login_dict}), login_dict["code"]


@app.route("/sign_up", methods=["POST"])
def sign_up():
    # Get user data from sign_up
    data = request.get_json()
    fname = data.get("fname")
    lname = data.get("lname")
    email = data.get("email")
    password = data.get("password")

    User = namedtuple("User", ["fname", "lname", "email", "password"])
    user = User(fname, lname, email, password)

    # Check if email has been used
    email_dict = check_user_email(email)
    if email_dict["status_code"] == 401:
        return jsonify({"msg": "Email already exists"}), 401

    user_dict = create_user(user)
    # Return a response object with corresponding error code
    if user_dict["status_code"] == 200:
        token = secrets.token_urlsafe(32)

        return jsonify({"login_dict": user_dict, "token": token}), 200

    return jsonify({"user_dict": user_dict}), user_dict["code"]


# Item Listing routes
@app.route("get_all", methods=["GET"])
def get_all():
    # Return list of all listings
    listings_dict = get_all_listings()

    if listings_dict["status_code"] == 200:
        jsonify({"res": listings_dict}), listings_dict["status_code"]
    else:
        jsonify({"res": listings_dict}), listings_dict["status_code"]


@app.route("get_item", methods=["GET"])
def get_item():
    # Using the ID get tuple of that element
    data = request.get_json()
    listing_id = data.get("id")

    single_listing_dict = get_single_listing(listing_id)

    # Return a single tuple of the object
    if single_listing_dict["status_code"] == 200:
        # Return item tuple
        return (single_listing_dict), single_listing_dict["status_code"]
    else:
        return jsonify(single_listing_dict), single_listing_dict["status_code"]
