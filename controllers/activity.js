const express = require('express');
const router = express.Router();

var locality = require('../models/locality');
//GET HTTP method
router.get('/:selected',(req,res) => {
  locality.find({"properties.Name": req.params.selected})
    .exec(function(err, docs){
      if(err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      res.status(200).json({message: 'Success', obj: docs[0].checkins});
    });
});
module.exports = router;
