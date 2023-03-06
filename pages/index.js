import PageLayout from 'components/PageLayout';
import Footer from 'components/Footer';
import AuthorIntro from 'components/AuthorIntro';
import FormsM from '../components/FormsM';
import Quote from '../components/Quote';
import Head from 'next/head';
import { getAllBlogs, getFrontpage, getForms, getFile } from 'lib/api';
import Link from 'next/link';

export default function Home({blogs, frontpage, surveys, files }) {
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
      <AuthorIntro title={frontpage[0].title} ingress={frontpage[0].ingress}/>
      <Quote />
      <div className='hero'>
        <h3>E-bok: Internkommunikasjon & følelser</h3>
        <span className='heroLink'>
          <a href={`${files[0].guideDownload}?dl=`}>Last ned en praktisk guide til god internkommunikasjon</a>
        </span>
      </div>
      <FormsM surveys={surveys}/>

      <Footer />

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
  return {
    props: {
      blogs, frontpage, surveys, files
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
