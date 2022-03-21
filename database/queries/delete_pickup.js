async function delete_pickup(pool, params) {
    const connection = await pool.connect();
    let res = null;

    try {
        const res1 = await connection.query('DELETE FROM PICKUPS WHERE PICKUP_ID = $1 RETURNING *', [params.id]);
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

module.exports = delete_pickup;