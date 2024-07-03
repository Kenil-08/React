# Blog Website

This project is a modern blog website built using React, Redux, and Appwrite. It allows users to create, edit, and delete blog posts, as well as read posts created by others. The application is designed with a focus on performance and user experience.

## Features

- **User Authentication**: Secure user login and registration.
- **CRUD Operations**: Create, read, update, and delete blog posts.
- **State Management**: Efficient state management with Redux.
- **Responsive Design**: Fully responsive design for all devices.
- **Real-time Updates**: Real-time data updates using Appwrite.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Kenil-08/blog-website.git
    cd blog-website
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Appwrite**:
   - Follow the [Appwrite documentation](https://appwrite.io/docs) to set up your backend server.
   - Create a project in Appwrite and configure the necessary collections and authentication.

4. **Configure environment variables**:
   - Create a `.env` file in the root directory of your project.
   - Add the following environment variables:
     ```env
     REACT_APP_APPWRITE_ENDPOINT=https://appwrite.yourdomain.com/v1
     REACT_APP_APPWRITE_PROJECT_ID=your_project_id
     REACT_APP_APPWRITE_API_KEY=your_api_key
     ```

## Usage

To start the development server, run:

```bash
npm start
```

This will start the React application on `http://localhost:3000`.

## Configuration

### Redux

The application uses Redux for state management. The Redux store is configured in the `src/store` directory. To add new features or modify existing ones, you can create new slices using `@reduxjs/toolkit` and update the store configuration accordingly.

### Appwrite

Appwrite is used as the backend service for authentication and data storage. Ensure you have set up the Appwrite server correctly and updated the environment variables.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.
