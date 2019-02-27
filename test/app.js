var request = require('supertest');
var app = require('../app');

describe('GET /', function() {
    it('returns 200', function(done) {
        request(app)
            .get('/')
            .expect(200, done);
    });
});

describe('GET /users', function() {
    it('returns 200', function(done) {
        request(app)
            .get('/users')
            .expect(200, done);
    });
});

describe('GET /any', function() {
    it('returns 404', function(done) {
        request(app)
            .get('/any')
            .expect(404, done);
    });
});