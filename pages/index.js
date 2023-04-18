import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import Head from 'next/head';
import { getFrontpage } from 'lib/api';

export default function Home({ frontpage }) {
  return (
    <PageLayout>
      <Head>
        <title>berta.no</title>
        <link rel="shortcut icon" href="/logoBGrnPunkt1.svg" />
        <meta property="og:title" content="Berta" key="title" />
        <meta name="description" content="Berta" />
        <meta name="keywords" content="Berta Prosjektledelse" />
        <meta name="author" content="Berta" />
      </Head>
        <div className="menu">
          <div href="#home">
            berta.no
          </div>
        </div>
      <AuthorIntro title={frontpage[0].title} ingress={frontpage[0].ingress} image={frontpage[0].image}/>
    </PageLayout>
  )
}

//called duing build time

//called on server
export async function getStaticProps() {
  const frontpage = await getFrontpage();

  return {
    props: {
      frontpage
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
