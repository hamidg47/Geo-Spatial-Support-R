import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinksVisible: false,
      submenuVisible: false,
    };
    this.clickTimeout = null;

    // Refs for outside click detection
    this.menuIconRef = React.createRef();
    this.navLinksRef = React.createRef();
    this.projectsBtnRef = React.createRef();
    this.submenuRef = React.createRef();
  }

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      navLinksVisible: !prevState.navLinksVisible,
      submenuVisible: prevState.navLinksVisible ? false : prevState.submenuVisible,
    }));
  };

  handleProjectsClick = (e) => {
    e.preventDefault();

    if (this.clickTimeout !== null) {
      clearTimeout(this.clickTimeout);
      this.clickTimeout = null;

      // ✅ Use React Router navigation instead of window.location.hash
      this.props.navigate("/Project");
    } else {
      this.clickTimeout = setTimeout(() => {
        this.setState((prevState) => ({
          submenuVisible: !prevState.submenuVisible,
        }));
        this.clickTimeout = null;
      }, 300);
    }
  };

  handleClickOutside = (e) => {
    if (
      this.submenuRef.current &&
      !this.submenuRef.current.contains(e.target) &&
      this.projectsBtnRef.current &&
      !this.projectsBtnRef.current.contains(e.target)
    ) {
      this.setState({ submenuVisible: false });
    }

    if (
      this.navLinksRef.current &&
      !this.navLinksRef.current.contains(e.target) &&
      this.menuIconRef.current &&
      !this.menuIconRef.current.contains(e.target)
    ) {
      this.setState({ navLinksVisible: false });
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
    if (this.clickTimeout) {
      clearTimeout(this.clickTimeout);
      this.clickTimeout = null;
    }
  }

  render() {
    const { navLinksVisible, submenuVisible } = this.state;

    return (
      <nav>
        <div className="nav-container">
          {/* Left Section */}
          <div className="left-section">
            <i
              id="menuIcon"
              className="menu-icon"
              onClick={this.toggleMobileMenu}
              style={{ cursor: "pointer" }}
              ref={this.menuIconRef}
            >
              <FontAwesomeIcon icon={faBars} />
            </i>
            <img src="./img vid/logo.png" alt="Logo" />
            <NavLink to="/Home" className="brand">
              <span>Geo Spatial Support</span>
            </NavLink>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <div
              className={`nav-links ${navLinksVisible ? "show" : ""}`}
              id="navLinks"
              ref={this.navLinksRef}
            >
              <NavLink to="/Home" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>

              {/* Projects Menu */}
              <div className="projects-container" ref={this.projectsBtnRef}>
                <NavLink
                  to="/Project"
                  onClick={this.handleProjectsClick}
                  className={({ isActive }) =>
                    isActive || submenuVisible ? "active" : ""
                  }
                  style={{ cursor: "pointer", display: "inline-flex", alignItems: "center" }}
                >
                  Projects
                  <i style={{ marginLeft: "5px" }}>
                    <FontAwesomeIcon icon={faCaretDown} />
                  </i>
                </NavLink>

                {/* Dropdown submenu */}
                <div
                  className={`submenu ${submenuVisible ? "show" : ""}`}
                  id="submenu"
                  ref={this.submenuRef}
                >
                  <NavLink to="/UAE" className={({ isActive }) => (isActive ? "active" : "")}>
                    UAE Climate Report 2024
                  </NavLink>
                  <NavLink to="/Remote" className={({ isActive }) => (isActive ? "active" : "")}>
                    Remote Sensing Project
                  </NavLink>
                  <NavLink to="/Machine" className={({ isActive }) => (isActive ? "active" : "")}>
                    Machine Learning in GIS
                  </NavLink>
                  <NavLink to="/Land" className={({ isActive }) => (isActive ? "active" : "")}>
                    Land Deformation Detection
                  </NavLink>
                  <NavLink to="/Disaster" className={({ isActive }) => (isActive ? "active" : "")}>
                    Disaster Detection
                  </NavLink>
                </div>
              </div>

              <NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")}>
                About Me
              </NavLink>
              <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "")}>
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

// ✅ Wrapper for React Router v6
function HeaderWrapper(props) {
  const navigate = useNavigate();
  return <Header {...props} navigate={navigate} />;
}

export default HeaderWrapper;
