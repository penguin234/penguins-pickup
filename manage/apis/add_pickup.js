async function add_pickup(req, queries) {
    try{
        let params = {
            name: req.body.name,
            content: req.body.content,
            categories: req.body.categories,
        };
        let pickup = await queries.add_pickup(params);
        return {data: {id: pickup.pickup_id, name: pickup.pickup_name, content: pickup.pickup_content, categories: pickup.category_ids}, error: null};
    }
    catch (err) {
        return {data: [], error: err};
    }
}

module.exports = {
    api: add_pickup,
    path: '/pickup/add',
    method: 'post',
};
