const express = require('express');
const router = express.Router();

var population = require('../models/population');

//GET HTTP method
router.get('/:selected',(req,res) => {
  population.find({"name": req.params.selected})
    .exec(function(err, doc){
      if(err){
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      res.status(200).json({message: 'Success', obj: doc});
    });
});

module.exports = router;
