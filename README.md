# crud-api-express
This project is a Node.js application that provides a basic CRUD (Create, Read, Update, Delete) API for managing tours. Built using Express, it demonstrates handling HTTP requests and routing with middleware for logging and request control.

![Zight Recording 2024-07-27 at 01 29 13 PM](https://github.com/user-attachments/assets/28223666-7984-478a-9908-98bd2585208e)


# Getting Started

This project uses Node.js and Express to create a RESTful API for managing tours. It includes endpoints for CRUD operations and utilizes middleware for logging and request control.

The server will start on port 3000. During development, you can use nodemon to automatically restart the server when changes are detected.

# API Endpoints

The API provides the following endpoints for managing tours:

Get All Tours

URL: /api/v1/tours
Method: GET
Description: Retrieves a list of all tours.

Create a Tour

URL: /api/v1/tours
Method: POST
Description: Creates a new tour.

Get a Specific Tour

URL: /api/v1/tours/:id
Method: GET
Description: Retrieves a specific tour by its ID.

Update a Specific Tour

URL: /api/v1/tours/:id
Method: PATCH
Description: Updates a specific tour by its ID.

Delete a Specific Tour

URL: /api/v1/tours/:id
Method: DELETE
Description: Deletes a specific tour by its ID.
