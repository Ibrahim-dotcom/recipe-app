const express = require('express');
const fs  = require('fs').promises;
const cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use('/login',sendToken);
app.use('/signup', sendToken);
app.get('/list', getList);

function sendToken(req, res){
  return res.send({token: 'test123'});
}

async function getList(req, res){
  let list = await fs.readFile('./Recipes.json');
  res.end(list);
  console.log(' done fetching list');
}
app.listen(port,() => console.log(`server listening at port ${port}`));
