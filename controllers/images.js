const express = require('express');
const router = express.Router();

var Flickr = require("flickrapi"),
  flickrOptions = {
    api_key: "6d42f1baba13b240aec22420915ec54e",
    secret: "57653057eaf05414"
  };


//GET HTTP method
router.get('/:selected',(req,res) => {
  Flickr.tokenOnly(flickrOptions, function(error, flickr) {
    // we can now use "flickr" as our API object and access public data
    if(error){
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    console.log("searching for photos of " + req.params.selected);
    flickr.photos.search({
      text: req.params.selected
    }, function(err, result) {
      if(err){
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      console.log(result.photos.photo);
      res.status(200).json({message: 'Success', obj: result.photos.photo});
    });

  });

});

module.exports = router;

