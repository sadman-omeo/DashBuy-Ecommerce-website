# DashBuy Ecommerce website
It a basic start of a Ecommerce website. Go throught Readme file


/test -> health check (D)
/seed -> seeding some data (D) 
/api/users (D)

POST /register -> Create new user
POST /activate -> activate the user account
GET /profile -> get user account
DELETE /:id -> delete account
PUT /:id -> update user account
PUT /update-password/:id -> update the pass
POST /forget password -> forgot pass
PUT /reset-password -> reset the pass

PUT Admin /ban/:id -> ban user
PUT Admin /unban/:id -> unbal user
GET Admin /export-users -> export all the user in an excel sheet
GET Admin /all-users -> get all users including search and pagination


Workflow:

1. course plan
2. Environement setup
3. Create express server -> express
4. HTTP request and resp
5. nodemon and morgan package -> nodemon and morgan
6. API testing with Postman
7. Middleware and Types of Middleware
8. Express error handking mioddleware -> body parser
9. How to handle HTTP error -> http-errors
10. How to secure API => xss-clean, express-rate-limit
