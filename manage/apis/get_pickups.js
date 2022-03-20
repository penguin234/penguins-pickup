async function get_pickups(req, queries) {
    try{
        let pickups = await queries.get_pickups({});
        let data = pickups.map((pickup) => ({id: pickup.pickup_id, name: pickup.pickup_name, content: pickup.pickup_content, categories: pickup.category_ids}));
        return {data: data, error: null};
    }
    catch (err) {
        return {data: [], error: err};
    }
}

module.exports = {
    api: get_pickups,
    path: '/pickup/all',
    method: 'get',
};