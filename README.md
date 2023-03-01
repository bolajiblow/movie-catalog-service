# Getting Started with Movie Catalog Service
This project was built on node and express, with mongobd and mongoose as database

## Available Scripts

In the project directory, you can run:

run npm i to install all dependencies,
create a .env file and attach  URL  and JWT_SECRET to it
the URL is a mongodb url,
the JWT_SECRET can be any string
### `npm run dev to start it locally`

There are 5 RESTful APIs
1 auth/signup to register new user,
2. auth/login to login to the application
3. get/movies to get list of movies
4. create/movie to create a movie/
 get/movie/:id to get a particular movie