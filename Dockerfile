FROM alpine:latest

RUN apk update
RUN apk add py-pip
RUN apk add --no-cache python3-dev 

WORKDIR backend/flaskapp
COPY . backend/flaskapp
RUN pip install flask
RUN pip install boto3

# Running Command
CMD ["python3", "flaskapp.py"]