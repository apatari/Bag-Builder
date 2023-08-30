import React, { useState } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";

function SearchSort() {

    const [searchText, setSearchText] = useState("")

    function handleSearchChange(e) {
        setSearchText(e.target.value)
    }

    return (
        <div>
            <Container className="m-3 fw-bold">
                <Form>
                <Row className="justify-content-md-center">
                    
                        <Col xs lg="4">
                            <Form.Label htmlFor="searchText">Search discs by model name</Form.Label>
                            <Form.Control type="text" onChange={handleSearchChange} id="searchText"  value={searchText} placeholder="-"></Form.Control>
                        </Col>
                        <Col md="auto">
                            <Form.Label>Sort discs by:</Form.Label>
                            <Form.Select>
                                <option value="">-</option>
                                <option value="sDec">Speed, decreasing</option>
                                <option value="sInc">Speed, increasing</option>
                                
                            </Form.Select>
                        </Col>
                   
                </Row>
                </Form>
            </Container>
        </div>
    )
}

export default SearchSort