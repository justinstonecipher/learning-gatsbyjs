import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = ({ home, about, solutions, contractVehicles, contact }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        display: `flex`,
        justifyContent: `space-around`,
      }}
    >
      <div
        style={{
          width: `300px`,
          marginBottom: `1.45rem`,
        }}
      >
        <Link to="/">
          <Image />
        </Link>
      </div>
      <h4 style={{ margin: 0, paddingTop: `30px` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {home}
        </Link>
      </h4>
      <h4 style={{ margin: 0, paddingTop: `30px` }}>
        <Link
          to="/about/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {about}
        </Link>
      </h4>
      <h4 style={{ margin: 0, paddingTop: `30px` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {solutions}
        </Link>
      </h4>
      <h4 style={{ margin: 0, paddingTop: `30px` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {contractVehicles}
        </Link>
      </h4>
      <h4 style={{ margin: 0, paddingTop: `30px` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {contact}
        </Link>
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  home: PropTypes.string,
  about: PropTypes.string,
  solutions: PropTypes.string,
  contractVehicles: PropTypes.string,
  contact: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  home: `Home`,
  about: `About Us`,
  solutions: `Solutions`,
  contractVehicles: `Contract Vehicles`,
  contact: `Contact Us`,
}

export default Header
