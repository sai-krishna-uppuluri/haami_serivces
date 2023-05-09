import React from 'react'
import blogStyles from '../styles/Blogs.module.css'
import pic from '../../public/residential-house.jpg'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import PostCard from '@/components/PostCard'
import { getPosts } from '@/pages/api/postApi'



export default function blogs({ posts }) {

   // console.log(...posts)
  return (
    <>
    <Navbar />
    <div className={blogStyles.Container}>
        <h1 className={blogStyles.blogHeading}> BLOGS </h1>
    </div>
    <div className={blogStyles.blogsContainer}>
        {posts.map((post) => (
            <PostCard key={post.title} post = {post.node} />
        ))}
    </div>
    </>
  )
}



export async function getStaticProps() {
    const posts = await getPosts() || []

    return {
        props : {posts}
    }
}

