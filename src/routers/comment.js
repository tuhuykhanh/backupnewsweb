const express = require('express')
const router = express.Router();

const commentConstroller  = require('../app/controllers/CommentController')

router.post('/comment', commentConstroller.savecomment);
router.post('/deletecmt/:id', commentConstroller.deletecomment);


module.exports = router;