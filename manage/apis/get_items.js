async function get_items(req, queries) {
    try{
        let items = await queries.get_items({});
        let data = items.map((item) => ({id: item.ITEM_ID, name: item.ITEM_NAME, content: item.ITEM_CONTENT, category: item.CATEGORY_ID}));
        return {data: data, error: null};
    }
    catch (err) {
        return {data: [], error: err};
    }
}

module.exports = {
    api: get_items,
    path: '/item/all',
    method: 'get',
};