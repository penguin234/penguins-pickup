async function get_categories(req, queries) {
    try{
        let categories = await queries.get_categories({});
        let data = categories.map((category) => ({id: category.category_id, name: category.category_name, content: category.category_content}));
        return {data: data, error: null};
    }
    catch (err) {
        return {data: [], error: err};
    }
}

module.exports = {
    api: get_categories,
    path: '/category/all',
    method: 'get',
};