var express = require('express');
var items = require('../database-mongo');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/PostBlogs', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.status(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/PostBlogs', (req, res) => {
  console.log(req.body)
  items.create(req.body, (err,success)=>{
    if(err){
      console.error(err)
    }
    else{
      res.send(success)
    }
  })
})

app.delete('/removeBlogs/:id', function(req,res){
  let id=req.params.id
  console.log(id);
  items.deleteOne({_id: id}, (err,result)=>{
    if(err){
      console.log(err);
    } else {
      res.send("deleted");
    }
  })
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

