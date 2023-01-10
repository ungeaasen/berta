
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
//import CardItem from 'components/CardItem';
import Navbar from 'react-bootstrap/Navbar';
import Forms from '../components/Forms'
import Quote from '../components/Quote'
import Head from 'next/head';
import Script from 'next/script';
import { getAllBlogs } from 'lib/api';

export default function Home({blogs}) {
  return (
    <PageLayout>
      <Head>
        <title>Berta internkommunikasjon</title>
        <Script 
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-SEPDQV6SSGid=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
          
        <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag(‘js’, new Date());
          gtag(‘config’, ‘${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}’, {
          page_path: window.location.pathname,
          });
        `}
        </Script>
        <meta property="og:title" content="Berta internkommunikasjon. Det er insiden som teller." key="title" />
      </Head>
      <Navbar expand="lg">
        <div className="tittel">
          <Navbar.Brand href="#home"><p>BERTA</p></Navbar.Brand>
        </div>
      </Navbar>
      <AuthorIntro />
      <Quote />
      <Forms />
      {/*{
        blogs.map(blog =>
          <Card key={blog.title}  className="mb-5" style={{ width: '18rem' }}>
            <Card.Title key={blog.subtitle}>
              <h4>{blog.title}</h4>
            </Card.Title>
            <Card.Text>
              {blog.subtitle}
            </Card.Text>
              <Card.Body>      
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
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
  return {
    props: {
      blogs
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
