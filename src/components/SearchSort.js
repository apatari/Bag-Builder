import React from "react";
import { Form, Col, Row, Container } from "react-bootstrap";

function SearchSort() {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="4">
                        Search bar
                    </Col>
                    <Col>
                        Filter options
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SearchSort