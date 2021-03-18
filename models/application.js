const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    postingUrl: {
        type: String,
        default: null
    },
    createDate: {
        type: Date,
        required: true
    },
    hasCoverLetter: {
        type: Boolean,
        default: false
    },
    contactedSomeoneAtCompany: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model("Application", applicationSchema);