import boto3
from werkzeug.wrappers import request

# Constants
USER_DATABASE_NAME      = "DandyHacks__ploop_user_database"
BATHROOM_DATABASE_NAME  = "DandyHacks__ploop_bathroom_database"
ACCESS_KEY              = "AKIAQ3ULTGCRC327I5NF"
SECRET_KEY              = "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"

dynamo = boto3.resource("dynamodb", 
    region_name='us-east-2',
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY
    )

USER_DATABASE           = dynamo.Table(USER_DATABASE_NAME)
BATHROOM_DATABASE       = dynamo.Table(BATHROOM_DATABASE_NAME)

# -------------------------------------------------
# User Methods
# -------------------------------------------------

def get_users():
    users = USER_DATABASE.scan()
    user_list = {
        'users' : {}
    }
    for item in users["Items"]:
        username = item["username"]
        password = item["password"]
        email = item["email"]
        gender = item["gender"]
        user_list["users"][username] = {
            "password" : password,
            "email" : email,
            "gender" : gender
        }
    return user_list

def get_user(username):
    user = USER_DATABASE.get_item(
        Key={
            'username' : username
        }
    )
    if "Item" in user:
        return user["Item"]
    else:
        return None

def add_user(username, data):
    user = {
        'username' : username,
        'password' : data["password"],
        'gender' : data["gender"],
        'email' : data["email"] 
    }
    USER_DATABASE.put_item(
        Item=user
    )
    return user

def edit_user(username, request_body):
    user = get_user(username)
    editted_user = {
        'username' : username,
        'password' : user["password"],
        'gender' : user["gender"],
        'email' : user["email"] 
    }
    if "password" in request_body:
        editted_user['password'] = request_body['password']
    if "gender" in request_body:
        editted_user['gender'] = request_body['gender']
    if "email" in request_body:
        editted_user['email'] = request_body['email']
    USER_DATABASE.put_item(
        Item=editted_user,
    )
    return {
        'username' : username,
        'password' : editted_user['password'],
        'gender' : editted_user['gender'],
        'email' : editted_user['email']
    }

def delete_user(username):
    USER_DATABASE.delete_item(
        Key={
            "username" : username
        }
    )
    return {
        'username' : username
    }


# -------------------------------------------------
# Bathroom Methods
# -------------------------------------------------

def get_bathrooms():
    bathrooms = BATHROOM_DATABASE.scan()
    bathroom_list = {
        'bathrooms' : {}
    }
    for item in bathrooms["Items"]:
        bathroom_id = item["bathroom_id"]
        longitude = item["longitude"]
        latitude = item["latitude"]
        clean_rating = item["clean_rating"]
        traffic_rating = item["traffic_rating"]
        ambiance_rating = item["ambiance_rating"]
        type = item["type"]
        floor = item["floor"]
        baby_station = item["baby_station"]
        drying_method = item["drying_method"]
        location_name = item["location_name"]
        bathroom_list["bathrooms"][str(bathroom_id)] = {
            "longitude" : longitude,
            "latitude" : latitude,
            "clean_rating" : clean_rating,
            "traffic_rating" : traffic_rating,
            "ambiance_rating" : ambiance_rating,
            "type" : type,
            "floor" : floor,
            "baby_station" : baby_station,
            "drying_method" : drying_method,
            "location_name" : location_name
        }
    return bathroom_list

def get_bathroom(bathroom_id):
    key = {
        'bathroom_id' : bathroom_id
    }
    bathroom = BATHROOM_DATABASE.get_item(
        Key=key
    )
    if "Item" in bathroom:
        return bathroom["Item"]
    else:
        return None

def add_bathroom(bathroom_id, data):
    bathroom = {
        'bathroom_id' : bathroom_id,
        "longitude" : data["longitude"],
        "latitude" : data["latitude"],
        "clean_rating" : data["clean_rating"],
        "traffic_rating" : data["traffic_rating"],
        "ambiance_rating" : data["ambiance_rating"],
        "type" : data["type"],
        "floor" : data["floor"],
        "baby_station" : data["baby_station"],
        "drying_method" : data["drying_method"],
        "location_name" : data["location_name"]
    }
    BATHROOM_DATABASE.put_item(
        Item=bathroom
    )
    return bathroom

def edit_bathroom(bathroom_id, request_body):
    bathroom = get_bathroom(bathroom_id)
    editted_bathroom = {
        'bathroom_id' : bathroom_id,
        "longitude" : bathroom["longitude"],
        "latitude" : bathroom["latitude"],
        "clean_rating" : bathroom["clean_rating"],
        "traffic_rating" : bathroom["traffic_rating"],
        "ambiance_rating" : bathroom["ambiance_rating"],
        "type" : bathroom["type"],
        "floor" : bathroom["floor"],
        "baby_station" : bathroom["baby_station"],
        "drying_method" : bathroom["drying_method"],
        "location_name" : bathroom["location_name"]
    }
    if "clean_rating" in request_body:
        editted_bathroom["clean_rating"] = request_body["clean_rating"]
    if "traffic_rating" in request_body:
        editted_bathroom["traffic_rating"] = request_body["traffic_rating"]
    if "ambiance_rating" in request_body:
        editted_bathroom["ambiance_rating"] = request_body["ambiance_rating"]
    BATHROOM_DATABASE.put_item(
        Item=editted_bathroom,
    )
    return editted_bathroom