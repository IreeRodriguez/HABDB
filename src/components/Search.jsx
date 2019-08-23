import React, { Component } from 'react';
import { Row, Col, InputGroup, FormControl, Button, Form } from 'react-bootstrap';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input:'',

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {

        event.preventDefault();
        const url = `http://localhost:8000/species/${this.state.input}`

        fetch(url)
        .then(response => response.json())
        .then(res => {
            // this.props.history.push('/results')
            this.props.history.push({
                pathname: '/results',
                state: {
                    res
                }
              })
        })
            .catch(err => {
                console.log("error:", err);
            });

    }

    handleChange(e){
        this.setState({
            input: e.target.value
        })

    }

    render() {
        return (
            <div className="bg">
                <Row>
                    <Col>
                        <Form onSubmit={this.handleSubmit}>

                            <InputGroup size="lg" onChange={this.handleChange}>
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