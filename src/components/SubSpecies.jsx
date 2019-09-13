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

                    <SpecieCard title="Especie 1" color="blue"/>
                <CardDeck>

                </CardDeck>
                <CardDeck>
                   
                    <SpecieCard title="Especie 2" color="red"/>
                    <SpecieCard title="Especie 3" color="green"/>
                    <SpecieCard title="Especie 4" color="purple"/>
                    <SpecieCard title="Especie 5" color="orange"/>
                    <SpecieCard title="Especie 6" color="aqua"/>
                    <SpecieCard title="Especie 7" color="aqua"/>
                    <SpecieCard title="Especie 8" color="aqua"/>
                    <SpecieCard title="Especie 9" color="aqua"/>
                    <SpecieCard title="Especie 10" color="aqua"/>
                    <SpecieCard title="Especie 11" color="aqua"/>

                </CardDeck>

            </Container>


        );
    }
}

export default SubSpecies;