const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
    //Enter Schema details here
    sample: {
        type: String
    }
});

module.exports = mongoose.Model("Sample", sampleSchema);