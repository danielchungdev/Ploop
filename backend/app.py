from flask import Flask, Response, jsonify, request
from database import (
  # User Methods
  get_users,
  get_user,
  add_user,
  edit_user,
  delete_user,
  # Bathroom Methods
  get_bathrooms,
  get_bathroom,
  add_bathroom
)

app = Flask(__name__)

def error_message(message): 
    return {
        "error" : message
    }

# -------------------------------------------------
# User Routes
# -------------------------------------------------
@app.route("/api/users", methods=['GET'])
def get_users_route():
	return jsonify(get_users())

@app.route("/api/user/<string:username>", methods=['GET'])
def get_user_route(username):
    user = get_user(username)
    if user != None:
	    return user
    else:
    	return error_message("User Not Found"), 404

@app.route("/api/user/<string:username>", methods=['POST'])
def post_user_route(username):
    request_data = request.get_json()
    user_exists = get_user(username)
    if user_exists != None:
        return error_message("Existing User Found"), 404
    try: added_user = add_user(username, request_data)
    except Exception:
        return error_message("Insufficient Request Body"), 404
    return added_user

@app.route("/api/user/<string:username>", methods=['PUT'])
def put_user_route(username):
	request_data = request.get_json()
	editted_user = edit_user(username, request_data)
	return editted_user

@app.route("/api/user/<string:username>", methods=['DELETE'])
def delete_user_route(username):
	user_exists_check = get_user(username)
	if user_exists_check != None:
		return error_message("User Not Found"), 404
	delete_user(username)
	return error_message("User Deleted Successfully"), 200
	
# -------------------------------------------------
# Bathroom Routes
# -------------------------------------------------
@app.route("/api/bathrooms", methods=['GET'])
def get_bathrooms_route():
	return jsonify(get_bathrooms())

@app.route("/api/bathroom/<int:bathroom_id>", methods=['GET'])
def get_bathroom_route(bathroom_id):
	bathroom = get_bathroom(bathroom_id)
	if bathroom != None:
		return bathroom
	else:
		return error_message("User Not Found"), 404
	
@app.route("/api/bathroom/<int:bathroom_id>", methods=['POST'])
def post_bathroom_route(bathroom_id):
	request_data = request.get_json()
	bathroom_exists = get_bathroom(bathroom_id)
	if bathroom_exists != None:
		return error_message("Existing User Found"), 404
	try:
		added_bathroom = add_bathroom(bathroom_id, request_data) 
	except Exception:
		return error_message("Insufficient Request Body"), 404
	return added_bathroom

# -------------------------------------------------
# Bathroom Review Routes
# -------------------------------------------------

# -------------------------------------------------
# Image Routes
# -------------------------------------------------

if __name__ == '__main__':
	app.run('0.0.0.0', port=5000, debug=True)