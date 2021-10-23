FROM alpine:latest

RUN apk update
RUN apk add py-pip
RUN apk add --no-cache python3-dev 

WORKDIR backend
COPY . backend
RUN python3 -m venv venv
RUN source venv/bin/activate
RUN pip install flask
RUN pip install boto3

# Running Command
RUN cd backend
CMD ["python3", "/home/plooptheapp/Ploop/backend/flaskapp.py"]