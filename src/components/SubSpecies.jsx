import React, { Component } from 'react';
import { Container, CardDeck, } from 'react-bootstrap';
import SpecieCard from './SpecieCard';

class SubSpecies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        
    }

    render() {

        return (
            <Container className="sect">

                <CardDeck>
                    <SpecieCard title="Especie 1" color="blue"/>
                    <SpecieCard title="Especie 2" color="red"/>
                    <SpecieCard title="Especie 3" color="green"/>
                    <SpecieCard title="Especie 4" color="purple"/>
                    <SpecieCard title="Especie 5" color="orange"/>
                    <SpecieCard title="Especie 6" color="aqua"/>

                </CardDeck>

            </Container>


        );
    }
}

export default SubSpecies;