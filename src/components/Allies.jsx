import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import gobReg from '../assets/img/logo_GobRegional.png';
import mareaRoja from '../assets/img/logo_mareaRoja.png';
import subPesca from '../assets/img/logo_SubPesca.png';
import UAustral from '../assets/img/logo_Uaustral.png';
import corfo from '../assets/img/Logo-Corfo.png';

class Allies extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Container className="sect">
                <h2>Allies</h2>

            <div className="cards">
                <div className="imgs">
                    <Image src={gobReg} />
                </div>
                <div className="imgs">
                    <Image src={mareaRoja} />
                </div>
                <div className="imgs">
                    <Image src={subPesca} />
                </div>
                <div className="imgs">
                    <Image src={UAustral} />
                </div>
                <div className="imgs">
                    <Image src={corfo} />
                </div>
            </div>
            </Container>
        );
    }
}

export default Allies;