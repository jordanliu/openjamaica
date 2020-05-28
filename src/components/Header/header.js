import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Bird from "../../images/bird.svg"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-wrapper">
      <img className="bird" src={Bird} alt="Logo" />
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
