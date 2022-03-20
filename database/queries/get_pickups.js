async function get_pickups(pool, params) {
    const connection = await pool.connect();
    let res = null;

    try {
        const res1 = await connection.query('SELECT P.PICKUP_ID, P.PICKUP_NAME, P.PICKUP_CONTENT, C.CATEGORY_IDS FROM PICKUPS AS P LEFT JOIN (SELECT PICKUP_ID, ARRAY_AGG(CATEGORY_ID) AS CATEGORY_IDS FROM CATEGORY_CHART GROUP BY PICKUP_ID) AS C WHERE P.PICKUP_ID = C.PICKUP_ID');
        res = res1.rows;
    }
    finally {
        connection.release();
    }

    return res;
}

module.exports = get_pickups;