const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

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
  },
  {
    id: 4,
    quote: "Peanut Butter Crunch!"
  },
  {
    id: 5,
    quote: "Fun Holiday Shapes!"
  },
  {
    id: 6,
    quote: "Stays crunchy, even in milk!"
  }

];



app.get('/cerial', function(req, res, next){
  res.send(cerial);
});
