import * as React from 'react'
import Layout from '../components/Layout';
import {graphql} from 'gatsby'
import {blogPosts} from '../components/layout.module.css';
import {MDXRenderer} from 'gatsby-plugin-mdx'

const Blog = ({data}) => {
	return (
		<Layout pageTitle="demo blog">
         <ul className={blogPosts}>
               {
                 data.allFile.nodes.map(node => (
                   <article key={node.childMdx.id}>
                     <h2>{node.childMdx.frontmatter.title}</h2>
                    
                      <time>{node.childMdx.frontmatter.date}</time>


                     <MDXRenderer>
                       { node.childMdx.body }
                     </MDXRenderer>

                     
                   </article>
                 ))
               }
               </ul>
			
		</Layout>  
	)
}

export const query = graphql`
  query MyQuery {  
  allFile {
		    nodes { 
			      childMdx {
					        frontmatter {
					          title
					          date(formatString: "dddd,MMMM Do yyyy")
					        }
					        children {
					          id
					        }
				        id
				        body
			          }  
		    }
  }
}

`
export default Blog