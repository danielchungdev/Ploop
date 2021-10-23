FROM alpine:latest

RUN apk update
RUN apk add py-pip
RUN apk add --no-cache python3-dev 

WORKDIR backend/flaskapp
COPY . backend/flaskapp
RUN pip --no-cache-dir install -r backend/requirements.txt

CMD ["python3", "flaskapp.py"]