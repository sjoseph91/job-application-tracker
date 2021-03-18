const express = require("express");
const applicationRouter = express.Router();
const Application = require("../models/application.js");

//get all applications
applicationRouter.get("/", (req, res, next) => {
    Application.find((err, applications) => {
        if(err){
            res.status(500);
            return next(err);
        }
        return res.status(200).send(applications);
    })
})

//get user applications
applicationRouter.get("/user", (req, res, next) => {
    Application.find({user: req.user._id}, (err, applications) => {
        if (err){
            res.status(500);
            return next(err);
        }
        return res.status(200).send(applications);
    })
})

//add new application
applicationRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id;
    const newApplication = new Application(req.body);
    newApplication.save((err, savedApplication) => {
        if (err){
            res.status(500);
            return next(err);
        }
        return res.status(201).send(savedApplication);
    })
})

// delete application 
applicationRouter.delete("/:applicationId", (req, res, next) => {
    const applicationId = req.params.applicationId;
    Application.findOneAndDelete(
        { _id: applicationId, user: req.user._id },
        (err, deletedApplication) => {
            if (err){
                res.status(500);
                return next(err);
            }
            //if successful delete, send back deleted item _id
            return res.status(200).send(deletedApplication._id)

        }
        )
})

//update application
applicationRouter.put("/:applicationId", (req, res, next) => {
    const applicationId = req.params.applicationId;
    Application.findOneAndUpdate(
        { _id: applicationId, user: req.user._id },
        req.body,
        { new: true }, 
        (err, updatedApplication) => {
            if (err){
                res.status(500);
                return next(err);
            }
            res.status(201).send(updatedApplication);
        }
    )
})


module.exports = applicationRouter;