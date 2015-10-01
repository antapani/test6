exports.register = function(server, options, next) {

    options.prefix = options.prefix || '->';
//    options.prefix = '->';
    // add a route
    server.route({
        method: 'GET',
        path:'/ping',
        handler: function (request, reply) {

            reply ({
                ping: options.prefix + ' pong '
            })
        }

    });

    next();
};

exports.register.attributes = {
    name: 'hello',
    version: '1.0.0'
};
