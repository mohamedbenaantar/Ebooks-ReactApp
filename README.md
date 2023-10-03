This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Option1: Pull The container from my public repo which is in Docker Hub

> docker pull mohamedbenaantar/ebook-reactapp

## Option2:  Build the Image and run a Container from it

> docker build . -f Dockerfile -t < image-name>:<tag>
> docker run --name <container-name> -p 3000:3000 -p 8000:8000 < image-name>:<tag>

## Run the JSON SERVER and JSON auth 

npx json-server data/db.json -m ./node_modules/json-server-auth -r data/routes.json --port 8000


## For more Info refers to the documentation about JSON SERVER 

https://www.npmjs.com/package/json-server

## Learn More about React 

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Tailwind CSS Documentation

https://tailwindcss.com/docs/installation