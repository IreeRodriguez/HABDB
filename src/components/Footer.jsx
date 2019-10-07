
import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import marCorfo from '../assets/img/logo_mareaRoja_blanco.png';
import beagle from '../assets/img/Beagle logo.png';


class Footer extends Component {
  // constructor() {
  //   super();

  // }
  render() {

    return (
      <footer>
          <div className="imgs">
            <div className="footImg">
              <Image src={beagle} />
            </div>
            <div className="footImg">
              <Image src={marCorfo} />
            </div>

          </div>

        <Row>
          <Col>
            <small>HABDB 2019</small>
          </Col>
        </Row>
      </footer>

    );
  }
}

export default Footer;