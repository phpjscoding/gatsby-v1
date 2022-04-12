import * as React from 'react'
import Layout from '../components/Layout';
import {graphql} from 'gatsby'
import {blogPosts} from '../components/layout.module.css';



const Blog = ({data}) => {
	return (
		<Layout pageTitle="demo blog">
         <ul className={blogPosts}>
               {
                 data.allFile.nodes.map(node => (
                   <li key={node.name}>
                     <h2>{node.name}</h2>
                   </li>
                 ))
               }
               </ul>
			
		</Layout>  
	)
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
export default Blog