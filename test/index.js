// Load modules

var Hapi = require('hapi');
var Lab = require('lab');
var Code = require('code');

// Test shortcuts

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('Test 6 Test', function() {
    it ('should load plugins', function(done) {
        var server = new Hapi.Server();
        server.connection();
        server.register(require('../'), function(err) {
            expect(err).to.not.exist();
            done();
        });
    });

    it ('should get reply from server', function(done) {
        var server = new Hapi.Server();
        server.connection();
        server.register(require('../'), function(err) {
            expect(err).to.not.exist();

            var request = {
                 method: 'GET',
                 url: '/ping',

            };

            server.inject(request, function(res) {
                expect(res.statusCode).to.equal(200);
                done();
            });
        });
    });

    it ('should get reply from server', function(done) {
        var server = new Hapi.Server();
        server.connection();
        var options= {
            register: require('../'),
            options: {
                prefix: '*'
                },
            };

        server.register(options, function(err) {
            expect(err).to.not.exist();
                var request = {
                    method: 'GET',
                    url: '/ping',
                };
            server.inject(request, function(res){
                expect(res.result.ping.indexOf(options.prefix)).to.equal(-1);
                console.log(res.result.ping);
                done();
            });
        });
    });

});
