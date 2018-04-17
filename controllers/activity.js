const express = require('express');
const router = express.Router();

var locality = require('../models/locality');

//GET HTTP method
router.get('/:selected',(req,res) => {
  locality.find({"properties.Name": req.params.selected})
    .populate("properties.checkins")
    .exec(function(err, doc){
      if(err){
        console.log("huhu");
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      //console.log(doc);
      res.status(200).json({message: 'Success', obj: doc[0].properties.checkins});
    });
});
module.exports = router;
