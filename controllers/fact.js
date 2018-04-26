const express = require('express');
const router = express.Router();

var fact = require('../models/population');

//GET HTTP method
router.get('/:selected',(req,res) => {
  fact.find({"name": req.params.selected})
    .exec(function(err, doc){
      if(err){
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      //console.log(doc[0].data);
      res.status(200).json({message: 'Success', obj: doc[0].data});
    });
});

module.exports = router;
