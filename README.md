# Guestbook

This repository contains the code for the guestbook project. ment to be executed as single user application where a user can add a post to his list of posts and clear all post when needed. The aim of this project is to demonstrate the use of react to create fully functional web frontend that is totally unaware of what technology is used to implement the backend.

### Prerequisite

- Install node.js
- Install bower using node.
- Install python.
- Install virtualenv / anaconda / use pip.
 
### Setup the Frontend

1. Go to the frontend directory `guestbook_frontend`.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to build app.
4. Run `bower install` to install additional page dependencies "bootstrap".
4. Open index.html in browser.


### Set up the Backend

1. Go to the backend directory `guestbook_backend`.
2. Activate virtual environment.
3. Install dependencies `pip install -r requirements.txt.` or equivalent.


### Running the website
1. Make data migration to setup database model `python manage.py makemigrations api`
2. Migare database to Initialize database `python manage.py migrate`.
3. Run the website application with `python manage.py runserver`.
	

### Running the API
To run the web API from the project root directory:
	$ python manage.py runserver


## Credit
This project was developed by the Xerosoft <admin@xerosoft.net>