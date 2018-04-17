const express = require('express');
const router = express.Router();

var locality = require('../models/locality');
//GET HTTP method
router.get('/:selected',(req,res) => {
  locality.find({"properties.Name": req.params.selected})
    .exec(function(err, docs){
      if(err) {
        console.log("huhu");
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      console.log(docs[0].checkins);
      res.status(200).json({message: 'Success', obj: docs[0].checkins});
    });
});
module.exports = router;
