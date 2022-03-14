async function update_item(pool, params) {
    const connection = await pool.connect();
    let res = null;

    try {
        const res1 = await connection.query('UPDATE ITEMS SET ITEM_NAME = $1, ITEM_CONTENT = $2, CATEGORY_ID = $3 WHERE ITEM_ID = $4 RETURNING *', [params.name, params.content, params.category, params.id]);
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

module.exports = update_item;