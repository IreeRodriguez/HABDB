import React, { Component } from 'react';
import SearchCard from './SearchCard';
import { Container, Table, Col } from 'react-bootstrap';

class ResultsDetails extends Component {
    constructor(props) {
        super(props);
        const { match: { params } } = this.props;
        const { id } = params;
        const { idUNIPROT } = params;
        this.state = {

            id,
            idUNIPROT,
            loading: true
        };
    }

    componentWillMount() {
        this.getTranscripts(this);
        // getPatientDetails(this);
    }

    getTranscripts(el) {
        console.log('====================================');
        console.log(el);
        console.log('====================================');

        const urlTranscrip = `http://localhost:8000/transcripts/${el.state.id}`;
        // const urlUnicode = `http://localhost:8000/uniprot/${el.state.idUNIPROT}`
        console.log(urlTranscrip);
        // console.log(urlUnicode);

        Promise.all([
            fetch(urlTranscrip).then(response => response.json()),
            // fetch(urlUnicode),
        ]).then(res => {

            console.log(res)

            if (res.length > 0) {

                this.setState({
                    HABDB: res[0][0],
                    loading: false
                })
            }


        })
            .catch(err => {
                console.log("error:", err);
            });

    }



    render() {
        const { HABDB } = this.state;
        const { loading } = this.state;
        console.log('====================================');
        console.log(HABDB);
        console.log(loading);
        console.log('====================================');

        return (
            <Container className="searchCards">
                {/* <SearchCard title={HABDB}/> */}

                {loading ? null : (
                    <Container>
                        <Col>
                        <h3>   </h3>
                        <Table striped bordered hover size="sm">
                            <tbody>
                                <tr>
                                    <td>HABDBid:</td>
                                    <td>{HABDB.id}</td>

                                </tr>
                                <tr>
                                    <td>Strains Id:</td>
                                    <td>{HABDB.Strains_id}</td>
                                </tr>
                                <tr>
                                    <td>Annotation:</td>
                                    <td>{HABDB.annotation}</td>
                                </tr>
                                <tr>
                                    <td>idUNIPROT:</td>
                                    <td>{HABDB.idUNIPROT}</td>
                                </tr>
                                <tr>
                                    <td>Sequence:</td>
                                    <td >
                                        <div className="longWord">
                                    {HABDB.sequence}

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Size:</td>
                                    <td >{HABDB.size}</td>
                                </tr>
                            </tbody>

                        </Table>
                        </Col>

                    </Container>



                )}
            </Container>
        );
    }
}

export default ResultsDetails;