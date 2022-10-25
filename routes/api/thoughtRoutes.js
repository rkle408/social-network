const router = require('express').Router();
const {
    getThoughts,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
    .get(getThoughts)
    .post();

// /api/thoughts/:thoughtId
router.route('')

module.exports = router;