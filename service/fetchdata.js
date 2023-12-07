async function getVideoById(id)
{
    const str = `https://eddmundoo.pythonanywhere.com/api/video/${id}`;
    const res = await fetch(str, {cache: 'no-store'});
    return res.json();
};

async function getVideos(keywords, page){

    const str = `https://eddmundoo.pythonanywhere.com/api/videos/${keywords}/${page}`;

    const res = await fetch(str, { cache: 'no-store' });
    return res.json();
};

async function getCategories()
{
    const str = `https://eddmundoo.pythonanywhere.com/api/categories/`;
    const res = await fetch(str, {cache: 'no-store'});
    return res.json();
}
export {getVideoById, getVideos, getCategories}
