const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dateFrom: {
        type: Date,
        required: true,
    },
    dateTo: {
        type: Date,
        required: true,
    },
   
});

module.exports = mongoose.model('Job', jobSchema);