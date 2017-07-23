module.exports = function (app) {

app.get('/polls', function(req, res) {
    res.send('okay')
  });

app.put('/polls', function(req, res) {
      res.send('okay')
    });

app.post('/polls', function(req, res) {
      res.send('okay')
    });

}
