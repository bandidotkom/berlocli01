const express = require('express');
const router = express.Router();

//GET HTTP method to /explore
router.get('/explore',(req,res) => {
    res.render('index');
});


module.exports = router;
