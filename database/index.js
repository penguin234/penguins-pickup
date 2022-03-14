const pool = require('./connect/makepool');


queries = {};

querynames = [
    'get_categories',
    
    'get_items',
    'get_items_with_category',
    'add_item',
    'update_item.js',
    'delete_item.js',
];

const wrap_query = require('./queries/wrap_query');

const basepath = './queries/';

for (const queryname of querynames) {
    const query = require(basepath + queryname);
    queries[queryname] = wrap_query(query, pool);
}


module.exports = queries;
