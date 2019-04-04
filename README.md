# Jiminstagram

Cloning Instagram with Python Django and React

## Built With

- Frontend
  - JavaScript(ES6+)
  - React(JSX, Redux, Ducks, Redux-thunk)
  - Scss, CSS-Module
  - Webpack
- Backend
  - Python, pipenv
  - Django(Django, Django-REST-Framework, Django-REST-auth, Cookiecutter Django)
  - PostgreSQL

## Getting Started

```
git clone https://github.com/jiminyun/jistagram
npm install

pipenv shell
python manage.py makemigrations && python manage.py migrate
python manage.py runserver

cd frontend
yarn start
```

## Demo

https://www.youtube.com/watch?v=lD-jtnAyJI8

[![Watch the video](https://img.youtube.com/vi/lD-jtnAyJI8/maxresdefault.jpg)](https://youtu.be/lD-jtnAyJI8)

## Features

- Feed
  - like, unlike : Optimistic Update
  - comment
  - follow, unfollow
- Search
- Explore
- Profile
- Notification
- PhotoUpload
- Login / SignUp
- Facebook Login

## Additional Functionality

- JWT token + Social Auth
- REST API
- Redux-thunk
- Responsive mixin
