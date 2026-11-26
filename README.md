# Library Management Systme Web Application

A full-stack web app for managing a library's book catalogue, User Authentication reviewing and borrowing process, built with React, Node.js, and MongoDB.

![Websute Screenshort](./library_project.jpg)

## Table of Contents

- [Introduction](#introduction)
- [Features](#featuers)
- [Technoloies Used](#technologies-used)
- [How to Use](#how-to-use)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This project is build with React JS, Node.js+express.js, MongoDB and deployed via GitHub and AWS.

[Visit Live Website](http://lms-yd-bucket.s3-website-ap-southeast-2.amazonaws.com/)

## Featuers

- Key features:
  - Admin book management: add books manually with full CRUD support
  - Online borrowing: users add books to a cart-style flow to borrow them, with state handled by Redux and redux-persist
  - User accounts: signup, login, authentication, and forgot-password
  - Reviews: users can review a book after returning it, and admins can approve or delete reviews
  - Admin dashboard and home page: a dashboard for admins and a "new arrivals" section on the home page
  - Deployment: hosted on AWS with a CI/CD pipeline

- **Responsive Design**:

## Technologies used

- ## **Frontend**:
  - React JS
  - Contact API
  - Redux
  - Nodemailer
  - Bootstrap in React
  - React-Toastify
  - React-icon
  - React API call endpoint axios
- **REST API**:
  - Postman for tesing
  - REST extention install in VS-code
- **Backend**:
  - Node.js, express.js
  - JWT decoded
  - JOI for server side validation
  - uuid for short digit token
  - bcryptjs for encrpt password
- **Database**:
  - MongoDB
- ## **Deployment**
  - Github, AWS (frontend & backend)

## How to use?

To set up this project in your device locally, please follow the steps:

1.  **Clone the respository**:
    run the following command in your terminal:
    > ```
    >   git clone https://github.com/yadin-nou/backend-library
    >   git clone https://github.com/yadin-nou/frontend-library
    > ```
2.  **Navigate to the project directory**:
    > ```
    >   cd yadin-nou
    > ```
3.  **Install Dependencies**:
    - ### Backend
      > ```
      > yarn add express.js
      > ```
      >
      > ```
      > yarn add nodemon
      > ```
      >
      > ```
      > yarn add cors
      > ```
      >
      > ```
      > yarn add bcrypt
      > ```
      >
      > ```
      > yarn add moongoose
      > ```
      >
      > ```
      > yarn add morgan
      > ```
      >
      > ```
      > yarn add jsonwebtoken
      > ```
      >
      > ```
      > yarn add nodemailer
      > ```
    - ### Frontend
      > ```
      > yarn add axios
      > ```
      >
      > ```
      > yarn add booststrap bootstrap
      > ```
      >
      > ```
      > yarn add react-toastify
      > ```
      >
      > ```
      > yarn add ract-icon
      > ```
      >
      > ```
      > yarn add rect-router-dom
      > ```
      >
      > ```
      > yarn add redux
      > ```
      >
      > ```
      > yarn add react-redux
      > ```
      >
      > ```
      > yarn add @reduxjs/toolkit
      > ```
      >
      > ```
      > yarn add redux-persist
      > ```
4.  **Run the development server**:
    > ```
    >   yarn dev
    > ```

## Usage

- Postman for tesing
- REST extention rest.http

## API Endpoints

- Auth Endpoint
  - /api/v1/auth/register as Post
  - /api/v1/auth/login as Post
  - /api/v1/auth/activate-user as Post
  - /api/v1/auth/renew-jwt as Get
  - /api/v1/auth/otp as Post
  - /api/v1/auth/reset-pwd as Post
  - /api/v1/auth/logout as Get

- USER Endpoint
  - /api/v1/users/profile as Get
  - /api/v1/users/all as Get

- Books Endpoints
  - /api/v1/book/addbook as Post
  - /api/v1/book/book as Get
  - /api/v1/book/ as Delete
  - /api/v1/book/ as patch
  - /api/v1/book/delImgs as patch
- Borrows Endpoints
  - /api/v1/borrows/admin as Get
  - /api/v1/borrows/user as Get
  - /api/v1/borrows/ as patch
  - /api/v1/borrows/borrows as Post

- Reviews Endpoints
  - /api/v1/reviews/admin as Get
  - /api/v1/reviews/admin as Delete
  - /api/v1/reviews/ as Get
  - /api/v1/reviews/admin as Patch

## Enviroment Variables

Environment variables is added to server.

## Project Workflow

- **Default Page**:
  - Signup user form
    - Validate form
    - Handle adding user into Database
    - Email confirmation
  - Login page
    - verify useremail and password
    - create token and response to frontend
    - Response message
  - Hone page
    - View Book
    - Search Book
    - View Review
    - add to Cart section
- **User Page**
  - Admin user
    - View data in Dashboard section
    - View book ( Add,delete,update, & update image)
    - View all borrows from any users
    - View all reviews and action to approved the message & delete
    - View admin borrow itseft with the Return book and leave review options
    - Admin profile manipulation
  - General user
    - View data in Dashboard section
    - View borrow books with the Return book actions and leave Review.
    - User profile manipulation

## Project Structure

```
LMS Backend
|-- public
|--|--images
|--|--|--image-filename
|-- src
| |-- configure
| | |-- config.js
| | |-- jwt.js
| |-- controllers
| | |-- authController.js
| | |-- bookController.js
| | |-- borrowController.js
| | |-- userController.js
| | |-- reviewController.js
| |-- dbConnection
| | |-- dbConfig.js
| |-- middleware
| | |-- validation
| | |--|-- authDataValidation.js
| | |--|-- joiConst.js
| | |--|-- joiValidation.js
| | |--|-- reviewMiddleware.js
| |-- models
| | |-- userModel.js
| | |-- userSchema.js
| | |-- bookModel.js
| | |-- bookSchema.js
| | |-- borrowHistoryModel.js
| | |-- borrowHistorySchema.js
| | |-- reviewModel.js
| | |-- reviewSchema.js
| | |-- sessionModel.js
| | |-- sessionSchema.js
| |-- Routers
| | |-- userRouter.js
| | |-- authRoutes.js
| | |-- bookRouter.js
| | |-- borrowRoute.js
| | |-- reviewRoute.js
| |-- services
| | |-- emailService.js
| | |-- emailTemplate.js
| | |-- transport.js
| |-- utils
| | |-- bcrypt.js
| | |-- jwt.js
| | |-- fileUtils.js
| | |-- multer.js
| | |-- randomGenderate.js
|-- rest.http
|-- server.js
|-- package.json
|-- .env

```

```
LMS Frontend
|-- public
|-- src
| |-- assets
| | |--images
| | |--|--image_file_for project
| |-- styles
| | |--|--jsonFormatTemplate.js
| |-- axiosHelp
| | |-- axiosConnected.js
| |-- components
| | |-- Button
| | |--|--Button.css
| | |--|--Button.jsx
| | |-- CopyPasted
| | |--|--CopyButton.jsx
| | |--homepageSection
| | |--|--BestRead.jsx
| | |--|--NewArrival.jsx
| | |--|--Recommended.jsx
| | |-- layout
| | |--|--DefaultLayout.jsx
| | |--|--Footer.jsx
| | |--|--Header.jsx
| | |--|--LeftNavBar.jsx
| | |--|--PageNav.jsx
| | |--|--UserLayout.jsx
| | |-- privateRoutes
| | |--|--AuthRoutes
| | |--sectionTitle
| | |--|--sectionTitle.module.css
| | |--|--SectionTitles.jsx
| | |-- Tooltips
| | |--|--Tooltips.jsx
| | |-- FormTemplate.jsx
| |-- features
| | |--|-- authHeader
| | |--|--|--authHeader.js
| | |--|-- book
| | |--|--|--bookAction.js
| | |--|--|--bookAPI.js
| | |--|--|--bookSlice.js
| | |--|-- borrow
| | |--|--|--borrowAction.js
| | |--|--|--borrowAPI.js
| | |--|--|--borrowSlice.js
| | |--|-- cart
| | |--|--|--cartAPI.js
| | |--|--|--CartSlice.js
| | |--|-- review
| | |--|--|--reviewAction.js
| | |--|--|--reviewAPI.js
| | |--|--|--reviewSlice.js
| | |--|-- user
| | |--|--|--userAction.js
| | |--|--|--userAPI.js
| | |--|--|--userSlice.js
| |-- hooks
| | |--useFormHook.js
| | |--usePagination.js
| | |--useFetch.js
| | |--useSpinner.js
| |-- localStorage
| | |--storage.js
| |-- pages
| | |--|-- auth
| | |--|--|--ForgetPasswordPage.jsx
| | |--|--|--SignInPage.jsx
| | |--|--|--SignUpPage.jsx
| | |--|--|--VerifyUser.jsx
| | |--|-- books
| | |--|--|--AddBook.jsx
| | |--|--|--BookLandingPage.jsx
| | |--|--|--BookList.jsx
| | |--|--|--BookTable.jsx
| | |--|--|--EditBookpage.jsx
| | |--|--|--ImportBook.jsx
| | |--|-- borrows
| | |--|--|--BorrowPage.jsx
| | |--|-- cart
| | |--|--|--CartPage.jsx
| | |--|--|--ThankPage.jsx
| | |--|-- dashboard
| | |--|--|--Dashboard.jsx
| | |--|--|--DashboardPage.jsx
| | |--|-- home
| | |--|--|--CustomCard.jsx
| | |--|--|--CustomCarousel.jsx
| | |--|--|--DisplayBook.jsx
| | |--|--|--SearchBookGlobal.jsx
| | |--|-- not_found
| | |--|--|--PageNotFound.jsx
| | |--|-- profiles
| | |--|--|--ProfilePage.jsx
| | |--|--|--userProfile.jsx
| | |--|-- reviews
| | |--|--|--AddReview.jsx
| | |--|--|--Reviewspage.jsx
| | |--|-- user
| | |--|--|--UserPage.jsx
| | |--|--|--UsersTable.jsx
| |-- redux
| | |-- rootReducer.js
| | |-- store.js
| |-- routes
| | |-- AppRoutes.js
| |-- service
| | |-- api.js
| | |-- authAPI.js
| |-- utils
| | |-- starRating.jsx
| | |-- validatePassword.js
|-- App.jsx
|-- main.jsx
|-- App.css
|-- index.css
|-- .env
|-- .gitignore
|-- buildspec.yml
|-- index.html
|-- package.json
|-- README.md
|-- vite.config

```

## Contributing

## License

## Contact
