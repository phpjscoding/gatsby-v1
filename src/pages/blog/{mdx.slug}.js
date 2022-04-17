import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/Layout'

const  postTemplate= ({data})=>{

	console.log({data})


	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<time>
				{data.mdx.frontmatter.date}
			</time>
		</Layout>
	)
}


export const query = graphql`
query MyQuery2($id:String){
	mdx(id: {eq: $id}) {
	  frontmatter {
		date(formatString: "dddd,MMMM Do yyyy")
		title
	  }
	  id
	}
  }
  

`

export default postTemplate


