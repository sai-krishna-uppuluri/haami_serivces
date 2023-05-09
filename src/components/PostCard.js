import React from 'react'
import blogStyles from '../styles/Blogs.module.css'
import pic from '../../public/residential-house.jpg'
import  Link  from 'next/link'
import Image from 'next/image'


 const PostCard = (props) => {
    
    const {post} = props
    console.log(post)

    const { title, featuredImage, categories, excerpt , slug } = post;

  return (
    <div className={blogStyles.blogsInnerContainer}>
              <Image src={post.featuredImage.url}  className={blogStyles.blogImage} width={500} height={300} alt='top-construction-companies-vijayawada'/>
              <div className={blogStyles.blogDescriptionContainer}>
                  <h1 className={blogStyles.blogTitleHeadText}> {post.title} </h1>
                  <h2 className={blogStyles.blogParaText}> {categories[0].name} </h2>
                  <p className={blogStyles.blogParaText}>
                    {post.excerpt}
                  </p>
                  <Link href = {`/post/${post.slug}`} className={blogStyles.linkComponent}>
                  <div className={blogStyles.btnContainer}>
                      <button type='button' className={blogStyles.blogBtn}> View Blog </button>
                  </div>
                  </Link>
              </div>
    </div> 
  )
}

export default PostCard