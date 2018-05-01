const express = require('express');
const router = express.Router();

const elasticsearch = require('elasticsearch');
const esClient = new elasticsearch.Client({
  host: '127.0.0.1:9200',
  log: 'error'
});

const search = function search(index, body) {
  return esClient.search({index: index, body: body});
};

//GET HTTP method
router.get('/:preferences',(req,res) => {
  let body = {
    size: 20,
    from: 0,
    query: {
      match: {description:  req.params.preferences}
    }
  };
  console.log(`retrieving all documents (displaying ${body.size} at a time)...`);
  search('locality', body)
    .then(results => {
      console.log(`found ${results.hits.total} items in ${results.took}ms`);
      console.log(`returned localities:`);
      results.hits.hits.forEach((hit, index) => {
        console.log(`\t${body.from + ++index} - ${hit._source.name}`);
      });
      res.status(200).json({message: 'Success', obj: results.hits.hits});
    })
    .catch(console.error);
});

module.exports = router;
