
# E-Commerce Back End

## Description

This project is a back-end system for an e-commerce site, built with the latest technologies to ensure that your company can stay competitive in the fast-paced world of online retail. The back end is constructed using **Express.js** and **Sequelize** to interact with a **PostgreSQL** database, enabling efficient management of products, categories, and tags. The project also includes comprehensive CRUD operations for managing these entities through RESTful API endpoints.

This project is designed for an internet retail company that needs a reliable and scalable solution to manage its product inventory, categories, and tags within an e-commerce site.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Database Models](#database-models)
- [API Routes](#api-routes)
- [Associations](#associations)
- [Technologies Used](#technologies-used)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/ecommerce-backend.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd ecommerce-backend
   ```

3. **Install the necessary packages**:

   ```bash
   npm install
   ```

4. **Set up environment variables**:

   Create a `.env` file in the root directory and include the following environment variables:

   ```env
   DB_NAME=your_database_name
   DB_USER=your_postgresql_username
   DB_PASSWORD=your_postgresql_password
   ```

5. **Create the PostgreSQL database**:

   Use the `schema.sql` file located in the `db` folder to create your database:

   ```bash
   psql -U your_postgresql_username -d your_database_name -f db/schema.sql
   ```

6. **Seed the database**:

   After setting up the database, seed it with initial data:

   ```bash
   npm run seed
   ```

7. **Start the server**:

   Finally, start the application server:

   ```bash
   npm start
   ```

## Usage

This application provides a robust back-end API for managing products, categories, and tags within an e-commerce site. Here’s how to test the functionality:

1. **Connect to the database**: 

   Ensure your PostgreSQL database is running and properly configured with the credentials in the `.env` file.

2. **Test API routes using Insomnia**:

   - **GET Requests**:
     - `GET /api/categories` - Retrieves all categories.
     - `GET /api/products` - Retrieves all products.
     - `GET /api/tags` - Retrieves all tags.
     - `GET /api/categories/:id` - Retrieves a single category by ID.
     - `GET /api/products/:id` - Retrieves a single product by ID.
     - `GET /api/tags/:id` - Retrieves a single tag by ID.
   - **POST Requests**:
     - `POST /api/categories` - Creates a new category.
     - `POST /api/products` - Creates a new product.
     - `POST /api/tags` - Creates a new tag.
   - **PUT Requests**:
     - `PUT /api/categories/:id` - Updates a category by ID.
     - `PUT /api/products/:id` - Updates a product by ID.
     - `PUT /api/tags/:id` - Updates a tag by ID.
   - **DELETE Requests**:
     - `DELETE /api/categories/:id` - Deletes a category by ID.
     - `DELETE /api/products/:id` - Deletes a product by ID.
     - `DELETE /api/tags/:id` - Deletes a tag by ID.

3. **Review JSON responses**: 

   The API routes return responses in JSON format, allowing easy integration with front-end applications or further back-end processing.

## Database Models

The project uses four Sequelize models to structure the PostgreSQL database:

1. **Category**:
   - `id`: Integer, primary key, auto-increment, non-nullable.
   - `category_name`: String, non-nullable.

2. **Product**:
   - `id`: Integer, primary key, auto-increment, non-nullable.
   - `product_name`: String, non-nullable.
   - `price`: Decimal, non-nullable, validates as a decimal.
   - `stock`: Integer, non-nullable, default value of 10, validates as numeric.
   - `category_id`: Integer, references the `Category` model's `id`.

3. **Tag**:
   - `id`: Integer, primary key, auto-increment, non-nullable.
   - `tag_name`: String.

4. **ProductTag**:
   - `id`: Integer, primary key, auto-increment, non-nullable.
   - `product_id`: Integer, references the `Product` model's `id`.
   - `tag_id`: Integer, references the `Tag` model's `id`.

## Associations

The following relationships are set up using Sequelize association methods:

- **Category**:
  - `Category` has many `Product`.
  - `Product` belongs to `Category`.

- **Product**:
  - `Product` belongs to many `Tag` through the `ProductTag` model.
  - `Tag` belongs to many `Product` through the `ProductTag` model.

These associations define the relationships between the different models, ensuring data integrity and efficient querying.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **Sequelize**: ORM for Node.js and PostgreSQL.
- **PostgreSQL**: Relational database management system.
- **dotenv**: Module to load environment variables from a `.env` file.
- **Insomnia**: API testing tool.

## Walkthrough Video

A walkthrough video demonstrating the functionality of the application, including the creation of the schema, seeding the database, starting the server, and testing the API routes in Insomnia, can be found [here](#). (Include the actual link to your walkthrough video.)

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
```

