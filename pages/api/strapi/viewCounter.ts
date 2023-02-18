const getViews = async (slug: string)=> {
    const URL = "https://cms.jsondelara.com/api/posts?filters[slug][$eq]=" + slug + "&fields[0]=views";
    const res = await fetch(URL);
    const data = await res.json();
    const views = {
        id: data?.data[0]?.id,
        count: data?.data[0]?.attributes?.views,
    }
  return views;
};
///
const registerView = async (slug: string): Promise<void> => {
  const views = await getViews(slug)
  const URL = "https://cms.jsondelara.com/api/posts/"+views.id;
  const res = await fetch("https://cms.jsondelara.com/api/posts/"+views.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{ "data": {"views": ${views.count+1} } }`
  })
};
export { getViews, registerView };
