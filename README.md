# Medical Bill Upload Service

This is a service that allows users to upload and retrieve medical bills. It's made with Node.js and Express. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Testing](#testing)

## Installation

1. Clone this repository:

   `git clone https://github.com/your-username/medical-bill-upload-service.git`

2. Install dependencies:

   `npm install`

3. Install Jest for testing:

   `npm install --save-dev jest`

## Usage

1. Start the server:

   `npm start`

2. Access the server at `http://localhost:3000`

*NOTE: No data will be seen at this step. To see data, the endpoints need to be tested. 

## Endpoints

- **GET /items**: Returns a list of medical bills.

- **POST /items**: Creates a new medical bill.

## Testing

Run tests using Jest:

`npm run test`

# Testing through Terminal 
1. To GET the list of medical bills, run: 

    `curl http://localhost:3000/items`

2. To add a POST request, run: 

    `curl -X POST http://localhost:3000/items -H 'Content-Type: application/json' -d '{ "data": "value" }'`

*NOTE: Keep in mind that the data that you will be uploading through terminal should be in the same format as the orignal data. 

For Example: 

Instead of '{ "data": "value" }', the format should be: 

'{ "patientName": "Bill", "patientAddress": "21 second street", "hospitalName": "Gen hospital", "dateOfService": "2022-02-23", "billAmount": 500 }'

# Testing through Postman 
 
1. Create a new Collection 
2. Add a new request 
3. To GET the list of medical bills, add the following: 
    1. http://localhost:3000/items
    2. Click Send 
4. To add a POST request, add the following: 
    1. http://localhost:3000/items
    2. Navigate to the Body
    3. Select raw as the data type 
    4. Make sure JSON is selected on the right 
    5. Add the data that you would like to upload 
        *Remember: The data should be in the same format as the original data, to view an example, go back to # Testing through Terminal
    6. Click Send   


