from flask import Flask, Response, jsonify, request
from werkzeug.wrappers import response
from database import ( 
	get_bathrooms, 
	get_users,
	get_user,
	add_user,
	edit_user,
	delete_user
)

app = Flask(__name__)

# -------------------------------------------------
# User Routes
# -------------------------------------------------
@app.route("/api/users", methods=['GET'])
def get_users_route():
	return jsonify(get_users())

@app.route("/api/user/<string:username>", methods=['GET'])
def get_user_route(username):
	try:
		user = get_user(username)
	except Exception:
		return "User Not Found", 404
	return user

@app.route("/api/user/<string:username>", methods=['POST'])
def post_user_route(username):
	request_data = request.get_json()
	user_exists_check = get_user(username)
	if user_exists_check != None:
		return "User Already Exists", 404
	try:
		password = request_data["password"] 
		email = request_data["email"]
		gender = request_data["gender"]
		added_user = add_user(username, password, gender, email)
	except Exception:
		return "Insufficient Request Body", 404
	return added_user
	

# -------------------------------------------------
# Bathroom Routes
# -------------------------------------------------
@app.route("/api/bathrooms", methods=['GET'])
def get_bathrooms_route():
	return jsonify(get_bathrooms()["Items"])

