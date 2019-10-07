import React, { Component } from 'react';
import DataTable, { memoize } from 'react-data-table-component';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
 
        cell: row => <Link to={`/resultsDetails/${row.id}/${row.name}`}>More</Link>,
        ignoreRowClick: true,
        button: true
      }
]);



class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: this.props.location.state.res
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    render() {

        const { results } = this.state;
        return (
            <Container className="searchCards">

                <div className="customCard">


                <DataTable title="Results" 
                
                columns={columns(this.handleClick)}
                data={results} defaultSortField="title"
                

                />

                </div>

            </Container>

        );
    }
}

export default Results;