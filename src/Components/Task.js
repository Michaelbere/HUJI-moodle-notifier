import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'

class Task extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Container className="task">
                <Row>
                    <Col>Task Title</Col>
                </Row>
                <Row>
                    <Col>Due Date</Col>
                    <Col>
                        <Button outline color="info">Go To Task</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Task