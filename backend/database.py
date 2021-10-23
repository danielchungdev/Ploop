import boto3

# Constants
USER_DATABASE       = "DandyHacks__ploop_user_database"
BATHROOM_DATABASE   = "DandyHacks__ploop_bathroom_database"

dynamo_client = boto3.client("dynamodb")

# -------------------------------------------------
# User Methods
# -------------------------------------------------

def get_users():
    user = dynamo_client.scan(
        TableName=USER_DATABASE
    )
    return user["Items"]

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

def edit_user(username):
    pass

def delete_user(username):
    pass

# -------------------------------------------------
# Bathroom Methods
# -------------------------------------------------

def get_bathrooms():
    return dynamo_client.scan(
        TableName=BATHROOM_DATABASE
    )

def get_bathroom(bathroom_id):
    pass