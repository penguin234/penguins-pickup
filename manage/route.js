const express = require('express');
const Apis = require('./apis/route');

module.exports = function(queries) {
    const router = express.Router();

    router.get('/item', (req, res) => {
        res.sendFile(__dirname + '/pages/item.html');
    });

    router.get('/pickup', (req, res) => {
        res.sendFile(__dirname + '/pages/pickup.html');
    });

    const apis = Apis(queries);
    router.use('/api', apis);

    return router;
}
