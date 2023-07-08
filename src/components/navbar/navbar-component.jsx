import React, { Component, createRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar-styles.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.navRef = createRef();
  }

  showNavbar = () => {
    this.navRef.current.classList.toggle("responsive_nav");
  };

  linkClicked = () => {
    const navbar = this.navRef.current;
    if (navbar.classList.contains("responsive_nav")) {
      navbar.classList.remove("responsive_nav");
    } else {
      navbar.classList.add("responsive_nav");
    }
  };

  render() {
    return (
      <div style={{ background: "#000000" }}>
        <Container>
          <header>
            {/* <h3>LOGO</h3> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="28"
              viewBox="0 0 440 600"
              aria-hidden="true"
            >
              <polygon fill="#4bafff" points="0,100 200,100 100,150"></polygon>
              <polygon fill="#4bc8fd" points="120,50 320,50 220,100"></polygon>
              <polygon fill="#85fafd" points="240,0 440,0 340,50"></polygon>
              <polygon fill="#3296ff" points="0,100 100,150 150,600"></polygon>
              <polygon fill="#32c8ff" points="120,50 220,100 270,550"></polygon>
              <polygon fill="#32ffff" points="240,0 340,50 390,500"></polygon>
            </svg>

            <nav ref={this.navRef}>
              <NavLink
                to="/home"
                onClick={this.linkClicked}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={this.linkClicked}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
              <NavLink
                to="/stats"
                onClick={this.linkClicked}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Stats
              </NavLink>
              <NavLink
                to="/utilities"
                onClick={this.linkClicked}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Utilities
              </NavLink>
              <NavLink
                to="/blogs"
                onClick={this.linkClicked}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Blogs
              </NavLink>
              <NavLink
                to="/certificates"
                onClick={this.linkClicked}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Certificates
              </NavLink>
              <NavLink
                to="/projects"
                onClick={this.linkClicked}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Projects
              </NavLink>

              <button
                className="nav-btn nav-close-btn"
                onClick={this.showNavbar}
              >
                <FaTimes />
              </button>
            </nav>
            <button className="nav-btn" onClick={this.showNavbar}>
              <FaBars />
            </button>
          </header>
        </Container>
      </div>
    );
  }
}

export default Navbar;

// import React, { Component, createRef } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { NavLink } from "react-router-dom";
// import "./navbar-styles.css";

// class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.navRef = createRef();
//   }

//   showNavbar = () => {
//     this.navRef.current.classList.toggle('responsive_nav');
//   };

//   render() {
//     return (
//       <header>
//         {/* <h3>LOGO</h3> */}
// 		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 440 600" aria-hidden="true">
//   <polygon fill="#4bafff" points="0,100 200,100 100,150"></polygon>
//   <polygon fill="#4bc8fd" points="120,50 320,50 220,100"></polygon>
//   <polygon fill="#85fafd" points="240,0 440,0 340,50"></polygon>
//   <polygon fill="#3296ff" points="0,100 100,150 150,600"></polygon>
//   <polygon fill="#32c8ff" points="120,50 220,100 270,550"></polygon>
//   <polygon fill="#32ffff" points="240,0 340,50 390,500"></polygon>
// </svg>

//         <nav ref={this.navRef}>
//           <a href="/#">Home</a>
//           <a href="/#">About</a>
//           <a href="/#">Stats</a>
//           <a href="/#">Utilities</a>
// 		  <a href="/#">Blogs</a>
// 		  <a href="/#">Certificates</a>
// 		  <a href="/#">Projects</a>
//           <button className="nav-btn nav-close-btn" onClick={this.showNavbar}>
//             <FaTimes />
//           </button>
//         </nav>
//         <button className="nav-btn" onClick={this.showNavbar}>
//           <FaBars />
//         </button>

//       </header>
//     );
//   }
// }

// export default Navbar;
