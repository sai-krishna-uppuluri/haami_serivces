import React from 'react'
import blogPost from '../styles/BlogPost.module.css'
// import { getPostDetails } from '../api/postApi'
import banner from '../../public/Importance of Plan Approvals.png'
import Image from 'next/image'

const PostContent = ({post}) => {


   // const post = props

   // console.log(post.content.raw)

   // const {title , slug  , featuredImage } = post

   const getContentDetails = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className={blogPost.headingThree}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className={blogPost.paragraphText}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className={blogPost.headingFour}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };



  return (
    <div className={blogPost.postDetailsContainer}>
            <div className={blogPost.postDetailsInnerContainer}>
                <div className={blogPost.postDetails}>
                    <Image src = {post.featuredImage.url} width = {200} height = {400} alt = "banner"  className={blogPost.imageBanner}/>
                    <div className={blogPost.detailsContainer}>
                        <h1 className={blogPost.headTitle}> {post.title} </h1>
                         {post.content.raw.children.map((typeObj , index) => {
                            const children = typeObj.children.map((item,  itemIndex) => getContentDetails(itemIndex , item.text , item))
                            
                            return getContentDetails(index, children, typeObj, typeObj.type)
                         })} 
                    </div>
                </div>
            </div>
      </div>
  )
}

export default PostContent
