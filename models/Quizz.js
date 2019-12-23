const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema Creation
const QuizzSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    answer1: {
        type: String,
        required: true,
        isTrue: Boolean
    },
    answer2: {
        type: String,
        required: true,
        isTrue: Boolean
    },
    answer3: {
        type: String,
        required: true,
        isTrue: Boolean
    },
    answer4: {
        type: String,
        required: true,
        isTrue: Boolean
    },
});

module.exports = Quizz = mongoose.model('quizz', QuizzSchema);