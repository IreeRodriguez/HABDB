import React, { Component } from 'react';
import SearchCard from './SearchCard';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results : this.props.location.state.res
          };
    }
    render() {
        const { results } = this.state;
        return (
            <div>
                {results.map((item, index) => {
                   return <SearchCard key={item.id} title={item.name}/>

                })
                }
            </div>
            
        );
    }
}

export default Results;