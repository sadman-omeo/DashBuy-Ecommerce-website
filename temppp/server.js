// const express = require("express");
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// //app.use(express.static());

// const isLoggedIn = (req, res, next) => {
//     const login = false;
//     if (login){
//         console.log("Logged in")
//         next();
//     } else{
//         return res.status(401).json({message: 'please login first!'});
//     }
//     console.log("isLoggedIn middleware.");
// }; 


// app.get("/test", (req, res) => {
//     res.status(200).send({
//         message: "API is working fine!!!"
//     });
// });


// app.get("/api/user", isLoggedIn, (req, res) => {
//     res.status(200).send({
//         message: 'user profile is returned successfully!!'
//     });
// });

// // client error handling
// app.use((req, res, next) => {
//     res.status(404).json({message: 'Route not founad'});
//     next();
// });

// // server error handling
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!')
// });

// app.listen(3001, ()=>{
//     console.log('server is perfectly running at http://localhost:3001')
// });

