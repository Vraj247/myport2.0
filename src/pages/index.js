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
                Product Design,User Experience Motion, and Code 
          </h1>
        </div>
        <div className="data">
          <h2>
          Currently at&nbsp;
           <a href="https://paytm.com/" class="Paytm-link" target="_blank">Paytm</a> to help designers, product managers and engineers collaborate better together.
          </h2>
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
