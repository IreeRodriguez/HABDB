import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ReactTable from "react-table";




class ResultsDetails extends Component {
    constructor(props) {
        super(props);
        const { match: { params } } = this.props;
        const { id } = params;
        const { idUNIPROT } = params;
        this.state = {

            id,
            idUNIPROT,
            loading: true,
            loadingUni: true,
            data: []
        };
    }

    

    componentDidMount() {
        this.getTranscripts(this);
    }

    getTranscripts(el) {

        const urlTranscrip = `http://localhost:8000/transcripts/${el.state.id}`;
        const urlUnicode = `http://localhost:8000/uniprot/${el.state.idUNIPROT}`


        fetch(urlTranscrip).then(response => response.json())
            .then(res => {

                if (res.length > 0) {


                    const obj = res[0]

                    for (const key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            const element = obj[key];

                            this.state.data.push({
                                title: key,
                                detail: element
                            })
                        }
                    }

                    this.setState({
                        HABDB: res[0],
                        loading: false,
                    })
                }


            })
            .catch(err => {
                console.log("error:", err);
            });


        fetch(urlUnicode).then(response => response.json())
            .then(res => {

                if (res.length > 0) {


                    const obj = res[0]

                    for (const key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            const element = obj[key];

                            this.state.data.push({
                                title: key,
                                detail: element
                            })
                        }
                    }

                    this.setState({
                        loadingUni: false,
                    })
                }


            })
            .catch(err => {
                console.log("error:", err);
            });

    }



    render() {
        const { loading } = this.state;
        const { loadingUni } = this.state;
        const { data } = this.state;

        return (
            <Container className="searchCards">
                <h2>Details</h2>
                {loading && loadingUni? null : (
                    <div className="customCard">

                        <ReactTable
                            data={data}
                            columns={[
                                {
                                    Header: "Id",
                                    accessor: "title",
                                    maxWidth: 200
                                },
                                {
                                    Header: "Description",
                                    Cell: row => (
                                        <div className="cell">

                                            {row.original.detail}

                                        </div>
                                    )
                                }


                            ]}
                            defaultPageSize={10}
                            style={{
                                height: "70vh"
                            }}
                            className="-striped -highlight"
                            showPagination={false}


                        />

                    </div>


                )}
            </Container>
        );
    }
}

export default ResultsDetails;