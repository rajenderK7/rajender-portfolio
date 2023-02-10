export const allProjectsQuery = `*[_type=="project" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    _updatedAt,
    "author": author -> name,
    slug,
    title,
    description,
    "imgURL": mainImage.asset->url,
    liveSite,
    github,
  }`;
