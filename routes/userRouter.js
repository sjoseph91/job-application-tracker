const express = require("express");
const userRouter = express.Router();
const User = require("../models/user");

userRouter.put("/", (req, res, next) => {
    User.findOneAndUpdate(
        { _id: req.body._id },
        req.body,
        { new: true },
        (err, updatedUser) => {
            if(err){
                res.status(500);
                return next(err);
            }
            return res.status(201).send(updatedUser);
        }
        )
})


module.exports = userRouter;