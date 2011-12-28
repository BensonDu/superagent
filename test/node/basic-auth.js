
var EventEmitter = require('events').EventEmitter
  , request = require('../../')
  , express = require('express')
  , assert = require('assert')
  , app = express.createServer();

app.use(express.basicAuth('tobi', 'learnboost'));

app.get('/', function(req, res){
  res.end('you win!');
});

app.listen(3010);

describe('req.auth(user, pass)', function(){
  it('should set Authorization', function(done){
    request
    .get('http://localhost:3010')
    .auth('tobi', 'learnboost')
    .end(function(res){
      res.status.should.equal(200);
      done();
    });
  })
})