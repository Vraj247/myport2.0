import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Vikas Raj Yadav" />
        <div className="header">
        <div className="text">
          <h1>
          Multidisciplinary designer with a focus on Product Design and Experiences
          </h1>
        </div>
        <div className="data">
        <h2>Currently I'm a part of the&nbsp;<a href="https://paytm.com/" class="Paytm-link" target="_blank">Paytm</a> design team, helped shipping products like Paytm Postpaid, Credit Score and few features in Paytm Trains. 
        Before that I have worked in companies like&nbsp;<a href="https://grappus.com/" class="Paytm-link" target="_blank">Grappus</a>&nbsp;and&nbsp;<a href="https://www.proprofs.com/" class="Paytm-link" target="_blank">ProProfs</a></h2>
        </div>
      </div>
      <div className = "projects-container">
        
          <div className ="projects-main1">
            <img src="/prj1.png" width="706px" height="810px"></img>
          </div>

          <div className ="projects-main2">
          <img src="/prj2.png" width="706px" height="810px"></img>
          </div>

          <div className ="projects-main1">
          <img src="/prj3.png" width="706px" height="810px"></img>
        </div>

        <div className ="projects-main2">
        <img src="/prj4.png" width="706px" height="810px"></img>
        </div>

      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
