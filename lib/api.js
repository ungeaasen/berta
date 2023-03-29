import client from './sanity';

const blogFields = `
	title,
	subtitle,
	'slug': slug.current
`

const frontPageContent = `
  title, 
  ingress,
  heroTitle,
  heroIntro
`

const formContent = `
  title,
  introText,
  survey,
  surveyAwardText,
  surveyURL
`

const guideContent = `
  guideTextBlock,
  "guideDownload": guideDownload.asset->url
`

const fileContent = `
  title,
  "guideDownload": guideDownload.asset->url
`

const aboutContent = `
  content
`
const cardContent = `
  content,
  title,
  description,
  image
`

export async function getCards() {
  const results = await client
    .fetch(`*[_type == "cards"]{${cardContent}}`);
  return results; 
}

export async function getAbout() {
  const results = await client
    .fetch(`*[_type == "about"]{${aboutContent}}`);
  return results; 
}

export async function getFile() {
  const results = await client
    .fetch(`*[_type == "files"]{${fileContent}}`);
  return results; 
}

export async function getGuide() {
  const results = await client
    .fetch(`*[_type == "guide"]{${guideContent}}`);
  return results; 
}

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

