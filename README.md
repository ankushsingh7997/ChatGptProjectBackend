
#Chat GPT


# Project Description:



The ChatGPT project is a chat application that uses an OpenAI API to generate responses to user input. The project is built using Node.js and Express.js, with MongoDB as the database and AWS S3 to store user profile images. Authentication and authorization are achieved using JSON Web Tokens (JWT) and passwords are encrypted using bcrypt. The project includes features for user registration, login, editing profile data, uploading profile images, deleting users, deleting chats, and fetching logs.`

To get started with the project, you will need to clone the repository and install the dependencies listed in the package.json file using npm. You will also need to set up environment variables in the .env file, including the MongoDB connection URI, JWT access key and expiration time, and refresh token.

The project folder structure is organized into the src folder, which includes subfolders for controllers, middleware, models, routes, services, utils, and validation. The server.js file is the entry point for the application, and it imports the necessary middleware and routes.

The controllers folder includes modules for handling user registration, login, updating user data, and deleting users. The features folder includes modules for asking questions to the OpenAI API, deleting chats, and fetching logs.

The middleware folder includes modules for authentication and authorization, which are used to protect certain routes from unauthorized access.

The models folder includes the user data model, which defines the schema for user data stored in the MongoDB database. The userDataModel schema is an array of objects that hold a question-answer pair and a unique ID for each object.

The routes folder includes modules that define the API routes for the application, including routes for user registration, login, asking questions, updating user data, deleting users, deleting chats, and fetching logs

The services folder includes modules that provide functions to perform CRUD (Create, Read, Update, Delete) operations on user data. The utils folder includes modules that provide helper functions, such as generating JWT tokens.

The validation folder includes modules that provide functions to validate user input for registration and login.

Overall, the ChatGPT project is a fully functional chat application that leverages the power of OpenAI to provide intelligent responses to user input. It is secure, efficient, and easy to use, making it an ideal choice for anyone looking to build a chat application with Node.js and Express.js.



## Acknowledgements

 I would like to thank Function Up Learning for providing me with the opportunity to learn and develop my skills in the MERN stack. The knowledge and experience I gained during my training were instrumental in completing this project.

I would also like to express my gratitude to the developers of the following technologies and libraries, which were used in the project:
* Node.js
* Express.js 
* MongoDB 
* Mongoose 
* OpenAI 
* API 
* AWS S3 
* JWT 
* Bcrypt 
* Axios 
* Multer 
* Cors 

### Features

* `Chat feature:` Users can chat with the application using OpenAI API.
 Copy chat logs to the clipboard.
* `Delete logs:` Users can delete logs in a single click or delete a particular log of chat.`

* `User management:` Users can register, login, delete their accounts, and edit their profile data.`

* `Authentication and authorization:` Authentication and authorization are achieved using JSON Web Tokens (JWT).`

* `AWS S3 integration:` Profile images are stored on AWS S3, and the application returns a link to the image.`

* ` MongoDB integration:` MongoDB is used as a database to store user data and chat logs.`


## Installation

Install my-project with npm

Clone the repository. Run npm install to install dependencies. Create a .env file and add your MongoDB connection URI, port, and JWT keys. Run npm start to start the application.
    
## Usage/Examples

## Usage/Examples

Clone the repository and navigate to the project directory
Install dependencies using npm install
Create a .env file with the following variables:
* `URI` - MongoDB Atlas connection string
* `PORT` - Port to run the server on
* `JWT_ACCESS_KEY` - Secret key for JWT access token
* `JWT_ACCESS_EXPIRE` - Expiration time for JWT access token
* `JWT_REFRESH_TOKEN` - Secret key for JWT refresh token

Start the server using npm start

Access the application at http://localhost:{PORT}

Register an account or login with an existing one

Chat with the AI and copy chat logs to the clipboard as needed

Edit your profile details and upload a profile picture

Delete your account or log out as needed


## File Structure


* `server.js:` Entry point of the application.

* `src/controllers:` Contains the features and user folders, which hold the controllers for chat, user registration, user login, user update, and user deletion.

* `src/db:` Contains the file that establishes a connection with MongoDB using the Mongoose library.

* `src/middleware:` Contains files for authentication and authorization.

* `src/models:` Contains the definition for the user model and schema for chat data.

* `src/routes:` Contains the definition of routes for chat, user registration, user login, user update, user deletion, and chat copying.

* `src/services:` Contains the services or functions that perform CRUD operations.

* `src/utils:` Contains the token creation and helper functions.

* `src/validation:` Contains the validation functions.

* `.env:` Contains environmental variables like URI, PORT, JWT_ACCESS_KEY, JWT_ACCESS_EXPIRE, JWT_REFRESH_TOKEN.

* `.gitignore:` Contains the files and folders that are not to be committed to the repository.

* `package-lock.json:` Automatically generated for any dependencies.

* `package.json:` Contains metadata and dependencies for the project.




## Depedencies

* aws-sdk: ^2.955.0
* bcrypt: ^5.0.1
* cors: ^2.8.5
* dotenv: ^10.0.0
* express: ^4.17.1
* jsonwebtoken: ^8.5.1
* mongoose: ^6.1.5
* multer: ^1.4.3
* multer-s3: ^2.9.0
* openai: ^3.0.1




## Conclusion

Chat GPT is a simple yet powerful chat application that utilizes OpenAI API for intelligent chat conversations. It allows users to register, login, and edit their profiles, and chat with the application. It uses MongoDB as a database and AWS S3 to store profile images. The application has been secured with authentication and authorization achieved using JSON Web Tokens (JWT).