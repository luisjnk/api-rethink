var thinky = require('thinky')({
  host:'localhost',
  port: 28015,
  db: 'People'
})

var r = thinky.r;

var People = thinky.createModel('People', {
  firstName : String,
  lastName: String,
  coolnessFactor: Number,
  date: {_type: Date, default: r.now()}
})

People.ensureIndex('date');

module.exports = function (app) {

app.get('/peoples/list', function(req, res) {
    People.orderBy({index: r.desc('date')}).run().then(function(people){
        res.json(people);
    }).error(function(err){
      res.json({message: err})
    })
    //res.send('okay')
  });

  app.post('/people/add', function(req,res){
      let person = new People(req.body);
      console.log(person);
      person.save().then(function(result){
        res.json(result);
      }).error(function(err){
        res.json({ message : err})
      })

  })

  app.get('/people/:idPeope', function(req, res) {
    let idPeople = req.params.idPeople;

    Peole.get(idPeople).run().then(function(person){
      res.json(person)
    }).error(function(err){
      res.json({message : err})
    })
  });

  app.delete('/people/:idPeope', function(req, res) {
    let idPeople = req.params.idPeople;

    Peole.get(idPeople).run().then(function(person){
      person.delete().then(function(result){
        res.json(result);
      }).error(function(err){
        res.json({message : err})
      })
    }).error(function(err){
      res.json({message : err})
    })
  });

}
