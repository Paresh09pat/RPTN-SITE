import React, { useState, useEffect, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Images/tech_logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const searchInputRef = useRef(null);

  const [isOpen, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Code for mangnifying glass starts
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleIconClick = (event) => {
    event.stopPropagation(); // Prevent event bubbling to the document click listener
    toggleSearch();
  };

  // Code for mangnifying glass starts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTimeout]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = prevScrollPos > currentScrollPos;
    const topZero = 0;

    setPrevScrollPos(currentScrollPos);
    setIsNavbarVisible(!isScrollingUp);

    if (currentScrollPos === 0) {
      setIsNavbarVisible(true);
    }

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // Set a new scroll timeout
    setScrollTimeout(
      setTimeout(() => {
        setIsNavbarVisible(true);
      }, 500) // Adjust this value to control how quickly the navbar appears after scrolling stops
    );

    // Hide the navbar while scrolling
    setIsNavbarVisible(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClick = () => {
    setOpen(!isOpen);
    setClicked(!clicked);
  };

  return (
    <nav className={`navbar ${isNavbarVisible ? "visible" : "hidden"}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Logo" className="nav_logo" />
          </a>
        </div>

        <div className="navbar-menu">
          <ul className={clicked ? "navbar-links active_col " : "navbar-links"}>
            <li className="nav-links_li">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                What we do
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" onClick={handleClick} to="/">
                  It Solutions
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  onClick={handleClick}
                  to="/RP/Expertise"
                >
                  Expertise
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  onClick={handleClick}
                  to="/RP/Cloud"
                >
                  Cloud Computing
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  onClick={handleClick}
                  to="RP/AI"
                >
                  Artifical Intelligence
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  onClick={handleClick}
                  to="/RP/Consulting"
                >
                  Consulting
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  onClick={handleClick}
                  to="/RP/Cyber"
                >
                  Cyber Security
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  onClick={handleClick}
                  to="/RP/Services"
                >
                  Services
                </NavLink>
              </div>
            </li>
            <li className="nav-links_li">
              <NavLink to="/RP/WhoWeAre" onClick={handleClick}>
                Who We Are
              </NavLink>
            </li>
            <li className="nav-links_li">
              <NavLink to="/RP/Contact" onClick={handleClick}>
                Contact
              </NavLink>
            </li>
            <li className="nav-links_li">
              <NavLink to="/RP/carrer" onClick={handleClick}>
                Career
              </NavLink>
            </li>
            <div className="search-container">
              <div
                className={`search-icon ${isSearchOpen ? "activeGlass" : ""}`}
                onClick={handleIconClick}
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  onClick={toggleSearch}
                />
              </div>
              {isSearchOpen && (
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Search"
                    ref={searchInputRef}
                  />
                </div>
              )}
            </div>
          </ul>
        </div>
        <div className="navbar-hamburger-menu">
          <div className="mobile-menu" onClick={() => setClicked(!clicked)}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
