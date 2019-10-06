import React, { Component } from 'react';
import { Card, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import Chart from 'react-google-charts';

class SpecieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.state.input) {
            console.log(this.state.input);
            console.log(event.target.value);
            return

        }
        

        const url = `http://localhost:8000/search/${this.state.input}`

        fetch(url)
        .then(response => response.json())
        .then(res => {

            if (res.length > 0) {
                
                this.props.history.push({
                    pathname: '/results',
                    state: {
                        res
                    }
                  })
            }
            
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
        // const { open } = this.state;
        return (
            <Card style={{ borderColor: this.props.color }}>

                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.details}
                    </Card.Text>
                    <div id="example-collapse-text" className="divChart" >
                        <Chart className="chart"
                            width={'400px'}
                            height={'300px'}
                            chartType="PieChart"
                            legendToggle
                            data={[
                                ['Task', 'Hours per Day'],
                                ['Annotated', this.props.annotated],
                                ['Hypothetical', this.props.hypothetical],
                                ['Uncharacterized', this.props.uncharacterized],
                                ['Un-annotated', this.props.unannotated],
                                // ['Total', 121601],
                            ]}
                            options={{
                                titlePosition: 'none',

                                pieSliceText: 'label',
                                backgroundColor: 'none',
                            }}
                        />
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Form onSubmit={this.handleSubmit}>

                        <InputGroup size="lg" onChange={this.handleChange}>
                            <FormControl
                                placeholder={`Search for ${this.props.title}`}
                                aria-label="Proteins names"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button id="basic-addon2" type="submit" ><i>search</i></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>

                </Card.Footer>
            </Card>
        );
    }
}

export default SpecieCard;