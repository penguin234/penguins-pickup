function wrap(query, pool) {
    return async (params) => query(pool, params);
}

module.exports = wrap;