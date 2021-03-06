const express = require('express');

const hubsRouter = require('./hubs/hubs-router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.json({ query: req.query, params: req.params, headers: req.headers })

  // res.send(`
  //   <h2>Lambda Hubs API</h2>
  //   <p>Welcome to the Lambda Hubs API</p>
  // `);
});

server.use('/api/hubs', hubsRouter); 

server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});

