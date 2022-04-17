import * as React from 'react'
import Layout from '../../components/Layout';
import {graphql, Link} from 'gatsby'
import {blogPosts} from '../../components/layout.module.css';
import {MDXRenderer} from 'gatsby-plugin-mdx'

const Blog = ({data}) => {
	return (
		<Layout pageTitle="demo blog">
         <ul className={blogPosts}>
               {
                 data.allFile.nodes.map(node => (
                   <article key={node.childMdx.id}>
                  

					 <Link to={node.childMdx.slug}>
					 <h2>{node.childMdx.frontmatter.title}</h2>
					 </Link>
                    
                      <time>{node.childMdx.frontmatter.date}</time>
                     
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
				        slug
			          }  
		    }
  }
}

`
export default Blog