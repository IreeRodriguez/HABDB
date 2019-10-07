import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import SpecieCard from './SpecieCard';
import data from '../assets/data/speciesData.json';

class SubSpecies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        
    }

    render() {

        return (
            <Container className="sect">
                <div className="cards">

                    {data.map((specie, i)=>{
                        return <SpecieCard {...this.props} key={i} title={specie.Specie} 
                        strain={specie.Strain}
                        annotated={specie.Annotated}
                        hypothetical={specie.Hypothetical}
                        uncharacterized={specie.Uncharacterized}
                        unannotated={specie.Unannotated}
                        total={specie.Total}
                        color="blue"    
                        />
                    })}
                </div>

            </Container>


        );
    }
}

export default SubSpecies;