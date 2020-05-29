/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "../index"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} Apache License 2.0,{` `}
          <a href="https://www.gatsbyjs.org">Built by Jordan Liu</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
