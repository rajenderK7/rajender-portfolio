export const resumeQuery = `*[_type == "myFiles" && title == "Katkuri Rajender Resume"][0] {
    "resumeURL": resume.asset->url,
  }`;
