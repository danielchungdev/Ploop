FROM alpine:latest

RUN apk update
RUN apk add py-pip
RUN apk add --no-cache python3-dev 

WORKDIR backend
COPY . backend
RUN python3 -m venv venv
RUN source bin/activate/venv
RUN pip install flask
RUN pip install boto3

# Running Command
RUN cd backend
CMD ["python", "/home/plooptheapp/Ploop/backend/flaskapp.py"]