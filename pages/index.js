import PageLayout from 'components/PageLayout';
import Footer from 'components/Footer';
import AuthorIntro from 'components/AuthorIntro';
import FormsM from '../components/FormsM';
import Quote from '../components/Quote';
import Head from 'next/head';
import { getAllBlogs, getFrontpage, getForms } from 'lib/api';

export default function Home({blogs, frontpage, surveys}) {
  return (
    <PageLayout>
      <Head>
        <title>Berta internkommunikasjon</title>
        <link rel="shortcut icon" href="/logoB2.svg" />
        <meta property="og:title" content="Det er insiden som teller." key="title" />
        <meta name="description" content="Eksperter på internkommunikasjon" />
        <meta name="keywords" content="Internkommunikasjon, Bedriftskommunikasjon, trivsel på arbeidet, klar kommunikasjon" />
        <meta name="author" content="Berta" />
      </Head>
      <div>
        <div className="tittel">
          <div href="#home">
            berta.no
            <span className='underline'></span>
          </div>
        </div>
      </div>
      <AuthorIntro title={frontpage[0].title} ingress={frontpage[0].ingress}/>
      <Quote />
      <FormsM surveys={surveys}/>
      <Footer />
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
    </PageLayout>
  )
}

//called duing build time

//called on server
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  const frontpage = await getFrontpage();
  const surveys = await getForms();
  return {
    props: {
      blogs, frontpage, surveys
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
