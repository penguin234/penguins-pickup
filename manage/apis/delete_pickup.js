async function delete_pickup(req, queries) {
    try{
        let params = {
            id: req.body.id,
        };
        let pickup = await queries.delete_pickup(params);
        return {data: {id: pickup.pickup_id, name: pickup.pickup_name, content: pickup.pickup_content}, error: null};
    }
    catch (err) {
        return {data: [], error: err};
    }
}

module.exports = {
    api: delete_pickup,
    path: '/pickup/delete',
    method: 'post',
};