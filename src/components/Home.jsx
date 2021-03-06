import React, { Component } from 'react';
import Footer from './Footer';
import Allies from './Allies';
import AboutUs from './AboutUs';
import Search from './Search';
import SubSpecies from './SubSpecies';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, Element } from 'react-scroll';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Results from './Results';
import ResultsDetails from './ResultsDetails';

class Home extends Component {
  constructor(src, title, onClick) {
    super(src, title, onClick);
    this.state = {
      src,
      title,
      onClick,
      counter: 0,
      right: 0,
      selected: null
    };
  }
  render() {
    return (
      <div>
        {/* <NavBar
          src={src}
          title={title}
          onClick={onClick}
          counter={counter}
          select={select}
        /> */}

        <Navbar fixed="top" expand="lg">
          <Navbar.Brand href="/" className="navItem">HABDB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav href="#search" className="nav-link">
                <Link
                  activeClass="active" className="search navItem" to="search" spy={true} smooth={true} duration={1000} >
                  Search
                </Link>
              </Nav>
              <Nav href="#species" className="nav-link">
                <Link
                  activeClass="active" className="species navItem" to="species" spy={true} smooth={true} duration={1000} >
                  Sub Species
                </Link>
              </Nav>
              <Nav href="#about" className="nav-link">
                <Link
                  activeClass="active" className="about navItem" to="about" spy={true} smooth={true} duration={1000} >
                  About Us
                </Link>
              </Nav>
              <Nav href="#allies" className="nav-link">
                <Link
                  activeClass="active" className="allies navItem" to="allies" spy={true} smooth={true} duration={1000} >
                  Allies
                </Link>
              </Nav>


            </Nav>
          </Navbar.Collapse>

        </Navbar>
        <Router>
          {/* <Redirect exact from="/" to="/home"></Redirect> */}

          <Route exact path='/' render={props =>

            <div>

              <Element name="search" className="search" >
                <Search {...props} />
              </Element>

              <Element name="species" className="species" >
              <div className="pad">

                <SubSpecies {...props} />
              </div>
              </Element>

              <Element name="about" className="about" >
              <div className="pad">
                <AboutUs />

              </div>
              </Element>

              <Element name="allies" className="allies" >
                <div className="pad">
                  <Allies />

                </div>
              </Element>
            </div>

          }
          />


          <Route exact path="/results" component={Results} />
          <Route exact path="/resultsDetails/:id/:idUNIPROT" component={ResultsDetails} />

          <Footer id="foot" />
          {/* <Router> */}
        </Router>
      </div>
    );
  }
}

export default Home;