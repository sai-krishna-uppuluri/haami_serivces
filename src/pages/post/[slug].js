import Navbar from '@/components/Navbar'
import banner from '../../../public/Importance of Plan Approvals.png'
import React from 'react'
import blogPost from '../../styles/BlogPost.module.css'
import { getPostDetails, getPosts } from '../api/postApi'
import Image from 'next/image'
import PostContent from '@/components/PostContent'
import Footer from '@/components/Footer'

const PostDetails = ({ post }) => {
 // console.log(post);

  return (
    <div>
      <Navbar />
      <PostContent  post = {post}/>
      <Footer />
    </div>
  );
};

export default PostDetails;

export async function getStaticPaths() {
  // console.log("-----------------reacged getstaticpaths-----------")

   const posts = await getPosts();

   // console.log("reached----------------fetched getpost------------")
  //console.log(posts)
  return {
    paths : posts.map(( {node : {slug}}) => ( {params :  {slug}})),
    fallback: false
  };
}

export async function getStaticProps({ params }) {

 // console.log("-------------reached get static props to fetch getpostDetails-----------")
  const data = await getPostDetails(params.slug);
 // console.log("-------------fetched getpostDetails-----------")
  //console.log(data)
  return {
    props: { post: data }
  };
}
