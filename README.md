## E-commerce Backend

### Description

This project is a back end for an e-commerce website developed to enhance the functionality of the internet retail company. By incorporating the latest technologies, the aim is to empower the company to compete effectively with other e-commerce businesses.

### Acceptance Criteria

1. **Express.js API:**
   - Given a functional Express.js API.

2. **Database Connectivity:**
   - When the database name, MySQL username, and MySQL password are added to an environment variable file.
   - Then, the application should be able to connect to a database using Sequelize.

3. **Database Initialization:**
   - When schema and seed commands are entered.
   - Then, a development database should be created and seeded with test data.

4. **Server Initialization:**
   - When the command to invoke the application is entered.
   - Then, the server should start, and Sequelize models should be synced to the MySQL database.

5. **API Routes - GET:**
   - When API GET routes in Insomnia Core for categories, products, or tags are opened.
   - Then, the data for each of these routes should be displayed in a formatted JSON.

6. **API Routes - POST, PUT, DELETE:**
   - When API POST, PUT, and DELETE routes in Insomnia Core are tested.
   - Then, it should be possible to successfully create, update, and delete data in the database.

### Video Demo

A video demo showcasing the functionality of the e-commerce backend can be found [here](https://drive.google.com/file/d/1rMcQRwyvdZGMtGwNK_k5YwYjkUfDyqMt/view).

### Environment Variables

Ensure the following environment variables are set in your environment file:

- `DB_NAME`: Database name
- `DB_USER`: MySQL username
- `DB_PASSWORD`: MySQL password

### Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up the environment variables as mentioned above.
4. Run schema and seed commands using `npm run seed`.
5. Start the application using `npm start`.

### Technologies Used

- Express.js
- Sequelize
- MySQL


### License

This project is licensed under no License Name 