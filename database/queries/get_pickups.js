async function get_pickups(pool, params) {
    const connection = await pool.connect();
    let res = null;

    try {
        const res1 = await connection.query('SELECT P.PICKUP_ID, PICKUP_NAME, PICKUP_CONTENT, ARRAY_AGG(C.CATEGORY_ID) AS CATEGORY_IDS FROM PICKUPS AS P LEFT JOIN CATEGORYCHART AS C ON P.PICKUP_ID = C.PICKUP_ID GROUP BY P.PICKUP_ID');
        res = res1.rows;
    }
    finally {
        connection.release();
    }

    return res;
}

module.exports = get_pickups;