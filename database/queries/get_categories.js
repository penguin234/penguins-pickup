async function get_categories(pool, params) {
    const connection = await pool.connect();
    let res = null;

    try {
        const res1 = await connection.query('SELECT * FROM CATEGORIES');
        res = res1.rows;
    }
    finally {
        connection.release();
    }

    return res;
}

module.exports = get_categories;