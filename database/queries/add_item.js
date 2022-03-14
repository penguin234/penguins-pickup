async function add_item(pool, params) {
    const connection = await pool.connect();
    let res = null;

    try {
        const res1 = await connection.query('INSERT INTO ITEMS (ITEM_NAME, ITEM_CONTENT, CATEGORY_ID) VALUES ($1, $2, $3) RETURNING *', [params.name, params.content, params.category]);
        res = res1.rows[0];
    }
    catch (err) {
        res = err;
    }
    finally {
        connection.release();
    }

    return res;
}

module.exports = add_item;
