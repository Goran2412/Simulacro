const {assert} = require('chai')
const request = require('supertest')
const app = require('../app')

describe('Get information', function () {

    describe('Get categories listing', function () {

        it('Get all categories', function (done) {
            request(app)
                .get('/categories')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    assert.isNotNull(res.body);
                    if (err) return done(err);
                    return done();
                });
            })

            it('Get categories through id (pk)', function (done) {
                request(app)
                    .get('/categories/1')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function (err, res) {
                        assert.isNotNull(res.body);
                        if (err) return done(err);
                        return done();
                    });

            })

        

    })
})
