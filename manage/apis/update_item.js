async function update_items(req, queries) {
    try{
        let params = {
            name: req.body.name,
            content: req.body.content,
            category: req.body.category,
            id: req.body.id,
        };
        let item = await queries.update_item(params);
        return {data: {id: item.item_id, name: item.item_name, content: item.item_content, category: item.category_id}, error: null};
    }
    catch (err) {
        return {data: [], error: err};
    }
}

module.exports = {
    api: update_items,
    path: '/item/update',
    method: 'post',
};