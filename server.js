var app =  require('./config/custom-express.js')();

app.set('port', process.env.PORT || 9000);

var server = app.listen(app.get('port'), function(){
    console.log('Server');
});
