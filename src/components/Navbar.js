import React from 'react'
import { Link } from 'gatsby'
import { FaCamera, FaCat, FaFacebook } from 'react-icons/fa'
import europeringen_logga from '../img/europeringen_logga.svg'

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  isActive = ({ isCurrent }) => {
    return isCurrent
      ? { className: 'navbar-item is-active' }
      : { className: 'navbar-item' }
  }

  render() {
    return (
      <div clasName="navbar-wrapper">
        <div className="header is-hidden-mobile">
          <div>
            <p>Gå med i Européringen</p>
            <button className="button">
              <span className="icon" style={{ marginRight: '5px' }}>
                <FaCat />
              </span>
              Bli Medlem
            </button>
          </div>
          <Link to="/">
            <img
              style={{ width: '150px', height: '150px' }}
              src="https://res.cloudinary.com/dh0fuolka/image/upload/v1547993272/europeringen_logga.png"
            />
          </Link>
          <div>
            <p>Europésnack</p>
            <button className="button">
              <span className="icon" style={{ marginRight: '5px' }}>
                <FaFacebook />
              </span>
              Facebook
            </button>
          </div>
        </div>
        <div className="header-separator is-hidden-mobile">
          <span className="left" />
          <p>Sveriges äldsta raskattsförening</p>
          <span className="right" />
        </div>
        <nav className="navbar" role="navigation" aria-label="main-navigation">
          <div className="navbar-brand">
            <Link
              to="/"
              className="navbar-item is-hidden-tablet"
              title="Logo"
              activeStyle={{ color: 'red' }}
            >
              <img
                src={europeringen_logga}
                alt="Européringen"
                style={{ width: '150px' }}
              />
            </Link>
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" getProps={this.isActive}>
                Hem
              </Link>
              <Link to="/about" getProps={this.isActive}>
                Om Européringen
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <a
                  className="navbar-link"
                  href="https://bulma.io/documentation/overview/start/"
                >
                  Uppfödning
                </a>
                <div className="navbar-dropdown">
                  <a className="navbar-item" href="#">
                    Uppfödare
                  </a>
                  <a className="navbar-item" href="#">
                    Avelshanar
                  </a>
                  <a className="navbar-item" href="#">
                    Till salu
                  </a>
                  <hr className="navbar-divider" />
                  <a
                    className="navbar-item"
                    href="https://bulma.io/documentation/elements/box/"
                  >
                    <span className="icon">
                      <FaCamera />
                    </span>
                    Bildgalleri
                  </a>
                </div>
              </div>
              <Link to="/contact" getProps={this.isActive}>
                Contact
              </Link>
              <Link to="/contact/examples" getProps={this.isActive}>
                Form Examples
              </Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
