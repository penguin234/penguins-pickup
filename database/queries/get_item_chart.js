async function get_item_chart(pool, params) {
    const connection = await pool.connect();
    let res = null;

    try {
        const res1 = await connection.query('SELECT CATEGORY_ID, CATEGORY_WEIGHT FROM CATEGORYCHART WHERE PICKUP_ID = $1 AND CATEGORY_ID = $2', [params.pickup_id, params.category_id]);
        res = res1.rows;
    }
    finally {
        connection.release();
    }
    
    return res;
}

module.exports = get_item_chart;