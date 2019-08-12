import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Project from './Project';
import Allies from './Allies';
import AboutUs from './AboutUs';

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
    const { src } = this.props;
    const { title } = this.props;
    const { onClick } = this.props;
    const { counter } = this.state;
    const { right } = this.state;
    const { select } = this.state;
    return (
      <div>
        <NavBar
          src={src}
          title={title}
          onClick={onClick}
          counter={counter}
          select={select}
        />

        <Project/>
        <AboutUs/>
        <Allies/>

        <Footer/>
      </div>
    );
  }
}

export default Home;