async function add_pickup(pool, params) {
    const connection = await pool.connect();
    let res = null;

    try {
        await connection.query('BEGIN');
        const res1 = await connection.query('INSERT INTO PICKUPS (PICKUP_NAME, PICKUP_CONTENT) VALUES ($1, $2) RETURNING PICKUP_ID', [params.name, params.content]);
        const pickup_id = res1.rows[0].pickup_id;

        for (const category of params.categories) {
            await connection.query('INSERT INTO CATEGORYCHART (PICKUP_ID, CATEGORY_ID, CATEGORY_WEIGHT) VALUES ($1, $2, $3)', [pickup_id, category, 1]);
        }

        await connection.query('COMMIT');

        const res2 = await connection.query('SELECT PICKUP_ID, PICKUP_NAME, PICKUP_CONTENT, ARRAY(SELECT CATEGORY_ID FROM CATEGORYCHART WHERE PICKUP_ID=PICKUPS.PICKUP_ID) AS CATEGORY_IDS FROM PICKUPS WHERE PICKUP_ID=$1', [pickup_id]);
        res = res2.rows[0];
    }
    catch (err) {
        await connection.query('ROLLBACK');
        res = err;
    }
    finally {
        connection.release();
    }

    return res;
}

module.exports = add_pickup;
