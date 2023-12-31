import React, { useState } from "react";
import { Form, Modal, Row, Col, Button, Toast } from "react-bootstrap";
import DiscCard from "./DiscCard";

function AddDisc({ onAddDisc }) {

    const blankDisc = {
        model: "",
        type: "",
        image: "",
        speed: "",
        glide: "",
        turn: "",
        fade: "",
        bagged: false
    }

    const [formData, setFormData] = useState(blankDisc)
    const [showModal, setShowModal] = useState(false)

    function handleModal() {setShowModal((showModal) => !showModal)}

    const invalidForm = (formData.model === "" || formData.type === "" || formData.image === "" || 
    formData.speed === "" || formData.glide === "" || formData.turn === "" ||
    formData.fade === "")

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setFormData({
            ...formData, 
            [name]:value
        })

    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/discs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(disc => {
            onAddDisc(disc)
            handleModal()
            setFormData(blankDisc)
        }) 
    }

    function doNotMoveDisc(disc) {
        
    }

    return (
        <div>
            <Form className="m-5 fw-bold" onSubmit={handleSubmit}> 
            <Row>
                <Col>
                
                    <Form.Group className="m-3">
                        <Form.Label htmlFor="model">Disc Model</Form.Label>
                        <Form.Control type="text" name="model" id="model" placeholder="Model" value={formData.model} onChange={handleChange} />
                    </Form.Group>
                
                </Col>
                <Col lg="3">
                    <Form.Group className="m-3 " >
                    <Form.Label htmlFor="type">Type of disc</Form.Label>
                        <Form.Select name="type" id="type" value={formData.type} onChange={handleChange} >
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
                        <Form.Label htmlFor="image">Image URL</Form.Label>
                        <Form.Control type="text" id="image" placeholder="Image" name="image" value={formData.image} onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="m-3 ">
                        <Form.Label htmlFor="speed">Speed</Form.Label>
                        <Form.Control type="number" id="speed" step={0.5} placeholder="-" name="speed" value={formData.speed} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="m-3 ">
                        <Form.Label htmlFor="glide">Glide</Form.Label>
                        <Form.Control type="number" id="glide" step={0.5} placeholder="-" name="glide" value={formData.glide} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="m-3 ">
                        <Form.Label htmlFor="turn">Turn</Form.Label>
                        <Form.Control type="number" id="turn" step={0.5} placeholder="-" name="turn" value={formData.turn} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="m-3 ">
                        <Form.Label htmlFor="fade">Fade</Form.Label>
                        <Form.Control type="number" id="fade" step={0.5} placeholder="-" name="fade" value={formData.fade} onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Button type="submit" className="m-4" size="lg" disabled={invalidForm}>Submit</Button>
            </Form>
            <div className="ms-5">
                {invalidForm? <h4>Complete all fields for a disc preview</h4> : 
                <div className="m-3"> 
                    <h5>Preview:</h5> 
                    <DiscCard disc={formData} onMoveDisc={doNotMoveDisc} /> 
                </div>}
            </div>

        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header>
            <Modal.Title>Disc added!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Navigate to the 'Select Discs' section to see your new disc </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleModal}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
            
        </div>
    )
}

export default AddDisc