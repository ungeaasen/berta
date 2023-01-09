
//import styles from '../styles/Home.module.css'
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
//import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Forms from '../components/Forms'
//import Container from 'react-bootstrap/Container'
//import Footer from '../components/Footer.js'
import Quote from '../components/Quote'

import { getAllBlogs } from 'lib/api';

export default function Home({blogs}) {
  return (
    <PageLayout>
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