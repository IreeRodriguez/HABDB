import React, { Component } from 'react';
// import SearchCard from './SearchCard';
import DataTable, { memoize } from 'react-data-table-component';
import { Container, Button } from 'react-bootstrap';

const columns = memoize(clickHandler =>[
    {
        name: 'Id',
        selector: 'id',
        sortable: true,
        width:'8em'
    },
    {
        name: 'Annotation',
        selector: 'annotation',
        sortable: true,
    },
    {
        name: 'idUNIPROT',
        selector: 'idUNIPROT',
        sortable: true,
    },
    {
        // name: 'Poster Link',
        cell: row => <Button target="_blank" rel="noopener noreferrer" onClick={clickHandler} value={row.id}>More</Button>,
        ignoreRowClick: true,
        button: true
      },
]);



class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: this.props.location.state.res
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(row) {
        console.log('====================================');
        console.log(row);
        console.log(row.target);
        console.log(row.target.value);
        console.log('====================================');
    }

    render() {
        console.log('====================================');
        console.log(this.state);
        console.log('====================================');
        const { results } = this.state;
        return (
            <Container className="searchCards">
                {/* {results.map((item, index) => {
                    //    return <SearchCard key={index} title={item.name} data={item}/>
                    return


                })
                } */}

                <div className="customCard">


                <DataTable title="Results" 
                
                columns={columns(this.handleClick)}
                data={results} defaultSortField="title"
                onRowSelected={this.handleClick}

                />

                </div>

            </Container>

        );
    }
}

export default Results;