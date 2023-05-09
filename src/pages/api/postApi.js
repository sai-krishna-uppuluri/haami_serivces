import {request , gql} from 'graphql-request';



const graphqlAPI = process.env.GRAPHCMS_ENDPOINT

export const getPosts = async () => {
    const query = gql`
    query myQuery {
      postsConnection {
        edges {
          node {
            slug
            title
            excerpt
            id
            featuredImage {
              featuredImagePost {
                id
              }
              url
            }
            categories {
              name
            }
          }
        }
      }
      }
      
    `

    const result = await request(graphqlAPI , query)

    return result.postsConnection.edges;
}

export const getPostDetails = async (slug) => {

  // console.log("---------reached getPostDetails API-------" , slug)

  const query = gql`
    query GetPostDetails($slug : String!)  {
      post(where :  {slug: $slug} ) {
              slug
              title
              excerpt
              id
              featuredImage {
                featuredImagePost {
                  id
                }
                url
              }
              categories {
                name
              }
              content {
                raw
              }
        }
      }
    
  `

  const result =await request(graphqlAPI , query , {slug})

  // console.log('--------------reached getPOstDetails result----------' , result)

  return result.post
}