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
          Hello, I'm Vikas Raj Yadav
          </h1>
        </div>
        <div className="data">
        <h2>I’m a Product Designer Living in Lucknow, India. Currently working remotely for <a>Paytm</a>
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
