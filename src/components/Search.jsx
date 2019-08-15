import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button, Form } from 'react-bootstrap';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log('====================================');
        console.log("submit");
        console.log('====================================');

        event.preventDefault();

      }

    render() {
        return (
            <div className="bg">
                <Row>
                    <Col>
                        <Form onSubmit={this.handleSubmit}>

                            <InputGroup size="lg">
                                <FormControl
                                    placeholder="Proteins names"
                                    aria-label="Proteins names"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button id="basic-addon2" type="submit" ><i>search</i></Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>


                    </Col>
                </Row>
            </div>
            // <div className="bg">


            // </div>

        );
    }
}

export default Search;