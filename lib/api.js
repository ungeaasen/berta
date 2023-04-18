import client from './sanity';
const frontPageContent = `
  title, 
  ingress,
  heroTitle,
  heroIntro,
  image

`

export async function getFrontpage() {
  const results = await client
    .fetch(`*[_type == "frontpage"]{${frontPageContent}}`);
  return results; 
}


/*
export async function getBlogBySlug(slug) {
  const result = await client
    .fetch(`*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
    }`, {slug})
    .then(res => res?.[0])
  return result;
}

*/

