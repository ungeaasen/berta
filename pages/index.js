import PageLayout from 'components/PageLayout';

import AuthorIntro from 'components/AuthorIntro';
import FormsM from '../components/FormsM';
import Quote from '../components/Quote';
import Hero from 'components/Hero';
import Head from 'next/head';
import { getAllBlogs, getFrontpage, getForms, getFile, getAbout, getCards } from 'lib/api';
import Link from 'next/link';
import Card from '../components/Cards';
import About from 'components/About';
import GPT from 'components/GPT'

export default function Home({blogs, frontpage, surveys, files, about, cards }) {
  return (
    <PageLayout>
      <Head>
        <title>Berta internkommunikasjon</title>
        <link rel="shortcut icon" href="/logoBGrnPunkt1.svg" />
        <meta property="og:title" content="Berta internkommunikasjon" key="title" />
        <meta name="description" content="Berta gjør virksomheter mer bevisst på hvordan ansatte kommuniserer innad. Vi gjør undersøkelser og identifiserer hvordan internkommunikasjonen deres fungerer – og leverer en rapport med alle nøkkelfunn." />
        <meta name="keywords" content="Internkommunikasjon, Bedriftskommunikasjon, Organisasjonskommunikasjon, kommunikasjon, trivsel på arbeidet, klar kommunikasjon" />
        <meta name="author" content="Berta" />
      </Head>
      <div>
        <div className="tittel">
          <div href="#home">
            berta.no
            <span className='underline'></span>
          </div>
          {/*<div><Link href="/guide/guide">Le Guide</Link></div>*/}
        </div>
      </div>
      <GPT />
      <AuthorIntro title={frontpage[0].title} ingress={frontpage[0].ingress}/>
      <Card cards={cards} />
      <Quote />
      <Hero content={frontpage} files={files} />
       {/*<FormsM surveys={surveys} />*/}
      <About content={about} />
      
      </PageLayout>
  )
}

//called duing build time

//called on server
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  const frontpage = await getFrontpage();
  const surveys = await getForms();
  const files = await getFile();
  const about = await getAbout();
  const cards = await getCards();
  return {
    props: {
      blogs, frontpage, surveys, files, about, cards
    }
  }
}

// export async function getServerSideProps() {
//   const randomNumber = Math.random();
//   const blogs = await getAllBlogs();
//   return {
//     props: {
//       blogs,
//       randomNumber
//     }
//   }
// }

// Static Page
// Faster, can be cached using CDN
// Created at build time
// When we making the request we are always receiving the same html document

// Dynamic Page
// Created at request time (we can fetch data on server)
// Little bit slower, the time depends on data you are fetching

      {/*
     
      
      {
        blogs.map(blog =>
          <div key={blog.title}  className="mb-5" style={{ width: '18rem' }}>
            <div key={blog.subtitle}>
              <h4>{blog.title}</h4>
            </div>
            <div>
              {blog.subtitle}
            </div>
              <div>      
                <a href="#">Card Link</a>
            </div>
          </div>
        )
      }
    */}
