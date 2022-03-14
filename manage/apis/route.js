const express = require('express');

apinames = [
    'get_items',
]

function wrap_api(api, queries) {
    return (req, res) => {
        api(req, queries)
            .then((data) => {
                res.json(data);
            });
    };
}

module.exports = function(queries) {
    const router = express.Router();

    for (const apiname of apinames) {
        const api = require('./' + apiname);
        router[api.method](api.path, wrap_api(api.api, queries));
    }

    return router;
}