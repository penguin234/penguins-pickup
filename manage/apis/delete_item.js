async function delete_item(req, queries) {
    try{
        let params = {
            id: req.body.id,
        };
        let item = await queries.delete_item(params);
        return {data: {id: item.item_id, name: item.item_name, content: item.item_content, category: item.category_id}, error: null};
    }
    catch (err) {
        return {data: [], error: err};
    }
}

module.exports = {
    api: delete_item,
    path: '/item/delete',
    method: 'post',
};