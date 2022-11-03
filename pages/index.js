import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';

import { getAllBlogs } from 'lib/api';

export default function Home({blogs}) {
  return (
    <PageLayout>
      <AuthorIntro />
      {JSON.stringify(blogs)}
      <hr/>
      <div className="mb-5">
      {
        blogs.map(blog =>
          <div md="4">
            <h3>{blog.title}</h3>
          </div>
        )
      }
      </div>
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
