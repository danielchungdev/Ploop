from flask import Flask, jsonify
from database import ( 
	get_bathrooms, 
	get_users
)

app = Flask(__name__)

# -------------------------------------------------
# User Routes
# -------------------------------------------------
@app.route("/api/users", methods=['GET'])
def get_users_route():
	return jsonify(get_users()["Items"])

# -------------------------------------------------
# Bathroom Routes
# -------------------------------------------------
@app.route("/api/bathrooms", methods=['GET'])
def get_bathrooms_route():
	return jsonify(get_bathrooms()["Items"])

