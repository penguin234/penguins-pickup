async function get_items_with_category(pool, params) {
    const connection = await pool.connect();
    let res = null;

    try {
        const res1 = await connection.query('SELECT I.ITEM_ID, I.ITEM_NAME, I.ITEM_CONTENT, C.CATEGORY_ID, C.CATEGORY_NAME FROM ITEMS AS I INNER JOIN CATEGORIES AS C ON I.CATEGORY_ID = C.CATEGORY_ID');
        res = res1.rows;
    }
    finally {
        connection.release();
    }

    return res;
}

module.exports = get_items_with_category;