function wrap_query(query, pool) {
    return async (params) => query(pool, params);
}

module.exports = wrap_query;