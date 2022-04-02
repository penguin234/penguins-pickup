async function get_items(req, queries) {
    try{
        let items = await queries.get_items_with_category({});
        let data = items.map((item) => ({id: item.item_id, name: item.item_name, content: item.item_content, category: item.category_id}));
        return {data: data, error: null};
    }
    catch (err) {
        return {data: [], error: err};
    }
}

module.exports = {
    api: get_items,
    path: '/item/with_category',
    method: 'get',
};