async function master_query(pool, command) {
    const connection = await pool.connect();
    let res = null;

    try {
        const res1 = await connection.query(command);
        res = res1;
    }
    finally {
        connection.release();
    }

    return res;
}

module.exports = master_query;