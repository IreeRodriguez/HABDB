import React, { Component } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';

class SpecieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(event) {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const { open } =  this.state;
        return (
            <Card style={{ borderColor: this.props.color }}>

                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        Species details.
                        </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={this.handleToggleClick.bind(this)}>Google Chart</Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            Google chart here.
                                </div>
                    </Collapse>
                </Card.Footer>
            </Card>
        );
    }
}

export default SpecieCard;