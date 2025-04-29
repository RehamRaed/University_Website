import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assest/af718gpk.png"
import "../../styles/Header.css";

function Header() {
  const [sideNav, setSideNav] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sideNavShow = () => {
    setSideNav(!sideNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div id="site_header" className={sticky ? "sticky" : ""}>
        <nav className="navbar container" id="Navbar">
          <div className="navbar-brand">
                 <img src={logo} alt="logo"/>
          </div>
          
          <div className="navbar-toggler" onClick={sideNavShow}>
            <i className="bi bi-list list_icon"></i>
          </div>
          <div className={`menu-items ${sideNav ? "active" : ""}`}>
            <ul>
              {[
                { name: "Home", to: "hero_section" },
                { name: "Program", to: "program_section" },
                { name: "About Us", to: "about_section" },
                { name: "Campus", to: "campus_section" },
                { name: "Testimonials", to: "testimonials_section" },
              ].map(({ name, to }) => (
                <li key={to}>
                  <ScrollLink
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => {
                      setSideNav(false);
                      setActiveSection(to);
                    }}
                    onSetActive={() => setActiveSection(to)}
                    className={`link-item ${
                      activeSection === to ? "active-link" : ""
                    }`}
                  >
                    {name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
        
            <a href="#contact_section" className="contact-btn">
              Contact Me
            </a>
            
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
