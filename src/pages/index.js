import * as React from 'react'

import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'


const HomePage = ()=>{
  return(
    <Layout pageTitle="Home page">
      <h2> this is home page </h2>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/russia-nature.avif"
      />
     </Layout>
    )
}

export default HomePage