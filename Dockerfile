FROM node:latest

## set the working directory
WORKDIR /myapp

## COPY the JSON FILE IN the root folder 
COPY package*.json /myapp/

## INSTALL the packages needed
RUN npm install

## copied the contents inside my working directory
COPY . /myapp/

## Build the application 
RUN npm run build

## expose it on the host 
EXPOSE 3000 8000

#  start both my app and JSON Server
CMD ["npx", "concurrently", "npm:start", "npx json-server /data/db.json -m ./node_modules/json-server-auth -r /data/routes.json --port 8000"] 