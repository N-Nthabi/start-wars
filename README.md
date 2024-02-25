# start-wars

## Before starting the project
I have used a postgres database and used docker to run the project
Run: docker run -d --name start-wars -p 5432:5432 -e POSTGRES_PASSWORD={password} postgres

## To run the project
cd backend
nodemon app.js
