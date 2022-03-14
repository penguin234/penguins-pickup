async function add_items(req, queries) {
    try{
        let params = {
            name: req.body.name,
            content: req.body.content,
            category: req.body.category,
        };
        let item = await queries.add_item(params);
        return {data: item, error: null};
    }
    catch (err) {
        return {data: [], error: err};
    }
}

module.exports = {
    api: add_items,
    path: '/item/add',
    method: 'post',
};