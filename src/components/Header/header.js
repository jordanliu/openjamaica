import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Bird from "../../images/bird.svg"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-wrapper">
      <div className="logo" aria-label="Logo">
        <img className="bird" src={Bird} alt="Logo" />
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <a href="https://github.com/jordanliu/openjamaica">
        <iframe
          src="https://ghbtns.com/github-btn.html?user=jordanliu&repo=openjamaica&type=star&count=true"
          frameborder="0"
          scrolling="0"
          width="150"
          height="20"
          title="GitHub"
          className="star"
        ></iframe>
      </a>
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
