import React, { Component } from 'react';
import { Card, Button, ListGroup, ListGroupItem, Col, Container } from 'react-bootstrap';


class SearchCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {data} =  this.props;
        console.log('====================================');
        console.log(this.props.data);
        console.log('====================================');
        return (
            <Container className="searchCards">

                {/* <Row> */}
                    <Col md={8}>
                    <Card >
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                Description
                            {/* <ul>
                                <li>HABDB ID:</li>
                                <li>UNIPROT ID:</li>
                                <li>PROTEIN NAME</li>
                            </ul> */}
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>HABDB ID: {data.id}</ListGroupItem>
                                <ListGroupItem>UNIPROT ID: {data.idUNIPROT}</ListGroupItem>
                                <ListGroupItem>{data.annotation}</ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer>
                            <Button>
                                Link
                        </Button>
                        </Card.Footer>
                    </Card>
                    </Col>

                {/* </Row> */}
            </Container>

        );
    }
}

export default SearchCard;