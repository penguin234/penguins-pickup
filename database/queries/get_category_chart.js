async function get_category_chart(pool, params) {
    const connection = await pool.connect();

    try {
        const res1 = await connection.query('SELECT CATEGORY_ID, CATEGORY_WEIGHT FROM CATEGORYCHART WHERE PICKUP_ID=$1', [params.pickup_id]);
    }
    finally {
        connection.release();
    }

    return res1.rows;
}

module.exports = get_category_chart;