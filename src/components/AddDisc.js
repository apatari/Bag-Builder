import React, { useState } from "react";
import { Form, Container, Row, Col, Button, Dropdown } from "react-bootstrap";

function AddDisc() {

    const [formData, setFormData] = useState({
        model: "",
        type: "",
        image: "",
        speed: "",
        glide: "",
        turn: "",
        fade: "",
        bagged: false
    })

    const invalidForm = true

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setFormData({
            ...formData, 
            [name]:value
        })

    }

    return (
        <div>
            <Form className="m-4">
            <Row>
                <Col>
                
                    <Form.Group className="m-3 ">
                        <Form.Label>Disc Model</Form.Label>
                        <Form.Control type="text" name="model" placeholder="Model" value={formData.model} onChange={handleChange} />
                    </Form.Group>
                
                </Col>
                <Col>
                    <Form.Group className="m-3 ">
                    <Form.Label>Type of disc</Form.Label>
                        <Form.Select name="type" value={formData.type} onChange={handleChange} >
                            <option value="">Select a type</option>
                            <option value="distance">Distance driver</option>
                            <option value="fairway">Fairway driver</option>
                            <option value="midrange">Midrange</option>
                            <option value="putter">Putt/approach</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="m-3 ">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text"  placeholder="Image" name="image" value={formData.image} onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="m-3 ">
                        <Form.Label>Speed</Form.Label>
                        <Form.Control type="number" step={0.5} placeholder="Speed" name="speed" value={formData.speed} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="m-3 ">
                        <Form.Label>Glide</Form.Label>
                        <Form.Control type="number" step={0.5} placeholder="Glide" name="glide" value={formData.glide} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="m-3 ">
                        <Form.Label>Turn</Form.Label>
                        <Form.Control type="number" step={0.5} placeholder="Turn" name="turn" value={formData.turn} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="m-3 ">
                        <Form.Label>Fade</Form.Label>
                        <Form.Control type="number" step={0.5} placeholder="Fade" name="fade" value={formData.fade} onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Button className="m-4" size="lg" disabled={invalidForm}>Submit</Button>
            </Form>
            
        </div>
    )
}

export default AddDisc