import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";


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
                {/* <h2>Sub species</h2> */}
                    <h2>Sub species</h2>
                <div className="customCard">

                    <ReactTable
                        data={results}
                        columns={[             
                            {
                              Header: "Id",
                              accessor: "HabDB ID",
                              maxWidth: 90
                            },
                            {
                              Header: "idUNIPROT",
                              accessor: "Uniprot ID"
                            },
                            {
                              Header: "Annotation",
                              accessor: "Transcript annotation"
                            },
                            {
                              Header: "Specie",
                              accessor: "Specie"
                            },
                            {
                              Header: "Strain",
                              accessor: "Strain",
                              maxWidth: 120,
                            },
                            {
                              Header: "Details",
                              maxWidth: 90,
                              Cell: row => (
                                <Link to={`/resultsDetails/${row.original['HabDB ID']}/${row.original['Uniprot ID']}`}>More</Link>
                              )
                            },
                          
                        
                      ]}
                      defaultPageSize={100}
                      style={{
                        height: "70vh" 
                      }}
                      className="-striped -highlight"
                    />

                </div>

            </Container>

        );
    }
}

export default Results;