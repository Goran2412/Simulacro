const {assert} = require('chai')
const request = require('supertest')
const app = require('../app')

describe('Device creation', function() {

    it('Check that the identifier length is equal to twelve', function (done) {
        request(app)
            .post('/devices')
            .send({identifier: "1234123412340"}) // 13 dígitos
            .expect(400)
            .end(function (err, res) {
                //console.log(res.body.identifier);
                assert.equal(res.body.message, 'INVALID_IDENTIFIER_LENGTH')
                if (err) done(err);
                return done();
            })
    })

    it('Device registration', function (done) {
        request(app)
            .post('/devices')
            .send({identifier: "0000111122223333"}) // 12 dígitos
            .expect(201)
            .end(function (err, res) {
                //console.log(res.body.userId);
                assert.equal(res.body.message, 'DEVICE_DOESNT_EXIST')
                if (err) done(err);
                return done();
            })
    })
})

describe('Device deletion', function() {

    it('Check that the device exists', function (done) {
        request(app)
            .delete('/devices/1')// No existe ningún dispositivo con ese identifier en la BD
            .expect(400)
            .end(function (err, res) {
                //console.log(res.body.userId);
                assert.equal(res.body.message, 'DEVICE_DOESNT_EXIST')
                if (err) done(err);
                return done();
            })
    })

    it.only('Device deletion', function (done) {
        request(app)
            .delete('/devices/123412341234')
            .expect(200, done)
    })
})