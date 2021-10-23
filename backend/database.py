import boto3

# Constants
USER_DATABASE       = "DandyHacks__ploop_user_database"
BATHROOM_DATABASE   = "DandyHacks__ploop_bathroom_database"

dynamo_client = boto3.client("dynamodb")

# -------------------------------------------------
# User Methods
# -------------------------------------------------

"""
Get All Users
"""
def get_users():
    return dynamo_client.scan(
        TableName=USER_DATABASE
    )

# -------------------------------------------------
# Bathroom Methods
# -------------------------------------------------

"""
Get All Bathrooms
"""
def get_bathrooms():
    return dynamo_client.scan(
        TableName=BATHROOM_DATABASE
    )