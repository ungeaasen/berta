import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';

import { getAllBlogs } from 'lib/api';

export default function Home({blogs}) {
  return (
    <PageLayout>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><h2>Berta</h2></Navbar.Brand>
      </Navbar>
      <AuthorIntro />
      <hr/>
      {
        blogs.map(blog =>
          <Card className="mb-5" style={{ width: '18rem' }}>
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
