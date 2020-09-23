/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Nav = () => {
  
  return (
    
        <nav className="nav-styles">
          <h3><a href="https://dribbble.com/Vraj247">Dribbble</a></h3>
          <h3><a href="https://www.behance.net/vraj247"><i class="fab fa-github"></i>Behance</a></h3> 
          <h3><a href="https://www.linkedin.com/in/vraj247/">Linkedin</a></h3>
          <h3><a href="https://twitter.com/Vraj247">Twitter</a></h3>
        </nav>
      
  )
}

export default Nav
