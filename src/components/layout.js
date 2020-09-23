import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"
import CSS from "./layout.scss"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
= (
  <>
  <div>
    <h1 className = "main-title">
    <img src="/favicon-32x32.png" width="32" height="32"></img>
     Vikas Raj Yadav
   </h1>
  </div>
  <Nav className="nav-style" />
  </>
)
 return (
    <div className="container">
    <header className="header-nav">{header}</header>
    <main>{children}</main>
  </div>
 )
}

export default Layout