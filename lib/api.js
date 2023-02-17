import client from './sanity';

const blogFields = `
	title,
	subtitle,
	'slug': slug.current
`

const frontPageContent = `
  title, 
  ingress
`

const formContent = `
  title,
  introText,
  survey,
  surveyAwardText
`

export async function getFrontpage() {
  const results = await client
    .fetch(`*[_type == "frontpage"]{${frontPageContent}}`);
  return results; 
}

export async function getAllBlogs() {
  const results = await client
    .fetch(`*[_type == "blog"]{${blogFields}}`);
  return results;	
}

export async function getBlogBySlug(slug) {
  const result = await client
    .fetch(`*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
    }`, {slug})
    .then(res => res?.[0])
  return result;
}

export async function getForms() {
  const results = await client
    .fetch(`*[_type == "surveys"]{${formContent}}`);
  return results;	
}

