const express = require('express');
const router = express.Router();
var geofact = require('../models/geofactdata');

//GET HTTP method
router.get('/:selected',(req,res) => {
  geofact.find({"locality": req.params.selected})
    .exec(function(err, doc){
      if(err){
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      //console.log(doc[0].data);
      res.status(200).json({message: 'Success', obj: doc[0]});
    });
});

module.exports = router;
