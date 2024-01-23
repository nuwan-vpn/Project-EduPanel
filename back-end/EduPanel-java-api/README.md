# Project Web Services Documentation

This document provides an overview of the web services available in the project. The services are designed to manage lecturer and user information through various HTTP methods.

## Lecturers

### Create a new Lecturer
**Method:** `POST`  
**Endpoint:** `/lecturers`  
**Success Response Code:** 201 CREATED  
**Error Response Codes:** 400 BAD REQUEST  
**Consumes MIME Types:** multipart/form-data  
**Produce MIME Types:** application/json

### Update Lecturer Details
**Method:** `PATCH`  
**Endpoint:** `/lecturers/{lecturer-id}`  
**Success Response Code:** 204 NO CONTENT  
**Error Response Codes:** 400 BAD REQUEST, 404 NOT FOUND  
**Consumes MIME Types:** multipart/form-data, application/json  
**Produce MIME Types:** N/A


### Delete a Lecturer
**Method:** `DELETE`  
**Endpoint:** `/lecturers/{lecturer-id}`  
**Success Response Code:** 204 NO CONTENT  
**Error Response Codes:** 404 NOT FOUND
**Consumes MIME Types:** N/A
**Produce MIME Types:** N/A

### Get All Lecturers
**Endpoint:** `GET /lecturers`  
**Success Response Code:** 200 SUCCESS  
**Produces MIME Types:** application/json

### Get a Lecturer
**Endpoint:** `GET /lecturers/{lecturer-id}`  
**Success Response Code:** 200 SUCCESS

### Get Full-time Lecturers
**Endpoint:** `GET /lecturers?type=full-time`  
**Success Response Code:** 200 SUCCESS  
**Produces MIME Types:** application/json

### Get Visiting Lecturers
**Endpoint:** `GET /lecturers?type=visiting`  
**Success Response Code:** 200 SUCCESS  
**Produces MIME Types:** application/json

## Users

### Create a User
**Endpoint:** `POST /users`  
**Success Response Code:** 201 CREATED  
**Error Response Codes:** 400 BAD REQUEST  
**Consumes MIME Types:** application/json

### Update User Details
**Endpoint:** `PATCH /users/{username}`  
**Success Response Code:** 204 NO CONTENT  
**Error Response Codes:** 400 BAD REQUEST, 404 NOT FOUND  
**Consumes MIME Types:** application/json

### Delete a User
**Endpoint:** `DELETE /users/{username}`  
**Success Response Code:** 204 NO CONTENT  
**Error Response Codes:** 404 NOT FOUND

### Get All Users
**Endpoint:** `GET /users`  
**Success Response Code:** 200 SUCCESS

### Log In
**Endpoint:** `POST /users/login`  
**Success Response Code:** 200 SUCCESS

---

*Note: Make sure to replace `{lecturer-id}` and `{username}` with the actual lecturer ID and username.*
