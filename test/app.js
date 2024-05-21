var expect  = require('chai').expect;
var request = require('request');
var server = require('../server')

it('Main page content', function(done) {
    request('http://localhost:8080/static/about.html' , function(error, response, body) {
        expect(body).to.equal('its all about the nature');
        done();
    });
});

