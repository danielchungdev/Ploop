import boto3

# Constants
USER_DATABASE       = "DandyHacks__ploop_user_database"
BATHROOM_DATABASE   = "DandyHacks__ploop_bathroom_database"

dynamo_client = boto3.client("dynamodb", region_name='us-west-2')

# -------------------------------------------------
# User Methods
# -------------------------------------------------

def get_users():
    user = dynamo_client.scan(
        TableName=USER_DATABASE
    )
    user_list = {
        'users' : {}
    }
    for item in user["Items"]:
        username = item["username"]["S"]
        password = item["password"]["S"]
        email = item["email"]["S"]
        gender = item["gender"]["S"]
        user_list["users"][username] = {
            "password" : password,
            "email" : email,
            "gender" : gender
        }
    return user_list

def get_user(username):
    user = dynamo_client.get_item(
        TableName=USER_DATABASE,
        Key={
            'username' : {
                'S' : username
            }
        }
    )
    if "Item" in user:
        return user["Item"]
    else:
        return None

def add_user(username, password, gender, email):
    user = {
        'username' : { "S" : username },
        'password' : { "S" : password },
        'gender' : { "S" : gender },
        'email' : { "S" : email }
    }
    dynamo_client.put_item(
        TableName=USER_DATABASE,
        Item=user
    )
    return {
        'username' : username,
        'password' : password,
        'gender' : gender,
        'email' : email
    }

def edit_user(username, request_body):
    user = get_user(username)
    editted_user = {
        'username' : { "S" : username },
        'password' : { "S" : user["password"]["S"] },
        'gender' : { "S" : user["gender"]["S"] },
        'email' : { "S" : user["email"]["S"] }
    }
    if "password" in request_body:
        editted_user['password']["S"] = request_body['password']
    if "gender" in request_body:
        editted_user['gender']["S"] = request_body['gender']
    if "email" in request_body:
        editted_user['email']["S"] = request_body['email']
    dynamo_client.put_item(
        TableName=USER_DATABASE,
        Item=editted_user,
    )
    return {
        'username' : username,
        'password' : editted_user['password']["S"],
        'gender' : editted_user['gender']["S"],
        'email' : editted_user['email']["S"]
    }

def delete_user(username):
    dynamo_client.delete_item(
        TableName=USER_DATABASE,
        Key={
            "username" : {
                "S" : username
            }
        }
    )
    return {
        'username' : username
    }


# -------------------------------------------------
# Bathroom Methods
# -------------------------------------------------

def get_bathrooms():
    return dynamo_client.scan(
        TableName=BATHROOM_DATABASE
    )

def get_bathroom(bathroom_id):
    pass