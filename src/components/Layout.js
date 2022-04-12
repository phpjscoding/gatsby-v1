import * as React from 'react'
import {Link,useStaticQuery,graphql} from 'gatsby'
import {container,mainNav} from './layout.module.css'



const Layout = ({pageTitle,children})=>{
	const data = useStaticQuery(graphql`query getTitle {
  site {
    id
    siteMetadata {
      title
    }
  }
}`
);
	

	return(
		  <div className={container}>
		  	    <title>{pageTitle} | {data.site.siteMetadata.title} </title>
		  	    <header> {data.site.siteMetadata.title} </header>

		  	    <nav className={mainNav}>
		  	    	<ul>
		  	    		<li><Link to='/'>Home</Link></li>
		  	    		<li><Link to="/about">About</Link></li>
		  	    		<li><Link to="/blog">Blog</Link></li>
		  	    	</ul>
		  	    </nav>

		  	    
		  	    <main>
		  	    	<h1> {pageTitle} </h1>
		  	    	{children}
		  	    </main>
		  </div>
		)
}


export default Layout