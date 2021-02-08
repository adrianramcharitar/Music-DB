FROM node:latest
COPY ./db.json /home
RUN npm install -g json-server@0.12.2
CMD ["json-server", "/home/db.json", "--p", "80"]
