const express = require("express");
const app = express();
require('dotenv').config()
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require('express-jwt')

app.use(express.json());
app.use(morgan("dev"));

mongoose.connect(
    'mongodb://localhost:27017/job-application-tracker-db',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    },
    () => console.log('Connected to the DB')
  )
  
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] })) // req.user
app.use("/api/application", require("./routes/applicationRouter.js") )
app.use("/api/user", require("./routes/userRouter.js"));

app.use((err, req, res, next) => {
    console.log(err)
    let status = err.status || 500;
    if(err.name === "UnauthorizedError"){
      res.status(err.status || 500)
    }
    return res.status(status).send({errMsg: err.message})
})


app.listen(9000, () => {
    console.log("The server is running on local port 9000");
})