import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Allies extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Container className="sect">

            <div>
                <h3>Logo Beagle</h3>
                <h3>Logo UChile</h3>
                <h3>Logo Subsecretaria</h3>
                <h3>Logo Region de los ríos</h3>
                <h3>Logo UAustral</h3>
            </div>
            </Container>
        );
    }
}

export default Allies;