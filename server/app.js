const express = require('express');
const app = express();

app.listen(3000, function(){
  console.log('listening on 3000');
});


const cerial = [{
  id: 1,
  quote: "Crunch-a-tize me Cap’n"
},
  {
    id: 2,
    quote: "Ghosts Turn milk Green!"
  },
  {
    id: 3,
    quote: "Oops-All-The-Berries!"
  }];



app.get('/cerial', function(req, res, next){
  res.send(cerial);
  console.log('hi');
});
