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