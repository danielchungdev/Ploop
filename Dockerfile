FROM alpine:latest

RUN apk update
RUN apk add py-pip
RUN apk add --no-cache python3-dev 

WORKDIR ~/backend
COPY . ~/backend
RUN pip install flask
RUN pip install boto3

# Running Command
CMD ["python3", "flaskapp.py"]