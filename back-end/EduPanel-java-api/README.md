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

**Method:** `GET` </br>
**Endpoint:** `/lecturers`  
**Success Response Code:** 200 SUCCESS  
**Consumes MIME Types:** N/A  
**Produces MIME Types:** application/json


### Get a Lecturer
**Method:** `GET` </br>
**Endpoint:** `/lecturers/{lecturer-id}`  
**Success Response Code:** 200 SUCCESS </br>
**Error Response Codes:** 404 NOT FOUND </br>
**Consumes MIME Types:** N/A  </br>
**Produces MIME Types:** application/json

### Get Full-time Lecturers
**Method:** `GET` </br>
**Endpoint:** `/lecturers?type=full-time`  
**Success Response Code:** 200 SUCCESS  
**Produces MIME Types:** application/json

### Get Visiting Lecturers
**Method:** `GET` </br>
**Endpoint:** `/lecturers?type=visiting`  
**Success Response Code:** 200 SUCCESS  
**Produces MIME Types:** application/json

## Users

### Create a new User
**Method:** `POST` </br>
**Endpoint:** `/users`  
**Success Response Code:** 201 CREATED  
**Error Response Codes:** 400 BAD REQUEST  
**Consumes MIME Types:** application/json </br>
**Produces MIME Types:** application/json


### Update User Details
**Method:** `PATCH` </br>
**Endpoint:** `/users/{username}`  
**Success Response Code:** 204 NO CONTENT  
**Error Response Codes:** 400 BAD REQUEST, 404 NOT FOUND  
**Consumes MIME Types:** application/json

### Delete a User
**Method:** `DELETE` </br>
**Endpoint:** `/users/{username}`  
**Success Response Code:** 204 NO CONTENT  
**Error Response Codes:** 404 NOT FOUND

### Get All Users
**Method:** `GET` </br>
**Endpoint:** `/users`  
**Success Response Code:** 200 SUCCESS </br>
**Produces MIME Types:** application/json

### Log In
**Method:** `GET` </br>
**Endpoint:** `/users/login`  
**Success Response Code:** 200 SUCCESS </br>
**Consumes MIME Types:** application/json </br>
**Produces MIME Types:** application/json

---

*Note: Make sure to replace `{lecturer-id}` and `{username}` with the actual lecturer ID and username.*
