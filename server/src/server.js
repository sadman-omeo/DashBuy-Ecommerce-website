const express = require("express");
const morgan = require('morgan');
const app = express();

app.use(morgan("dev"));

app.get("/test", (req, res) => {
    res.status(200).send({
        message: "API is working fine!!!"
    });
});

app.post("/test", (req, res) => {
    res.status(200).send({
        message: "post: API testing is working fine!!!"
    });
});

app.put("/test", (req, res) => {
    res.status(200).send({
        message: "put: API testing is working fine!!!"
    });
});

app.delete("/test", (req, res) => {
    res.status(200).send({
        message: "delete: API testing is working fine!!!"
    });
});

app.listen(3001, ()=>{
    console.log('server is perfectly running at http://localhost:3001')
});
