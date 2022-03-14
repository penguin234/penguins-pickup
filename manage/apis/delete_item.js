async function delete_items(req, queries) {
    try{
        let params = {
            id: req.body.id,
        };
        let item = await queries.delete_item(params);
        return {data: item, error: null};
    }
    catch (err) {
        return {data: [], error: err};
    }
}

module.exports = {
    api: delete_items,
    path: '/item/delete',
    method: 'post',
};