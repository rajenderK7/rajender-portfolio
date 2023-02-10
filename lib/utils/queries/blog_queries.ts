export const allBlogsQuery = `*[_type == "blog" && !(_id in path("drafts.**"))] {
    "slug": slug.current
  }`;

export const singleBlogQuery = (slug: String) => {
  return `*[_type == "blog" && !(_id in path("drafts.**")) && slug.current=="${slug}"][0] {
        "author": (author -> {name}).name,
        _updatedAt,
        publishedAt,
        title,
        description,
        content,
        "mainImage": mainImage.asset->url
    }`;
};
