const express = require('express');
const router = express.Router();

//Quizz Model
const Quizz = require('../../models/Quizz');

//Get 
router.get('/', (req, res) => {
    Quizz.find({})
        .then(quizzs => res.json(quizzs))
});

//Post 
router.post('/', (req, res) => {
    const newQuizz = new Quizz({
        question: req.body.question,
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        answer3: req.body.answer3,
        answer4: req.body.answer4,
    })

    newQuizz.save()
        .then(quiz => res.json(quiz));
});


module.exports = router