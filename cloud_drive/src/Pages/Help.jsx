import React from "react";
import Navbarf from "../Components/Navbarf";
import './Help.css'
import { useNavigate } from "react-router-dom";
import { Col, Container, ListGroup, Row, Tab } from "react-bootstrap";

const HelpPage = () => {
    const navigate = useNavigate()

    return (
        <>
        <Navbarf></Navbarf>
        <div className="container">
            <section className="row">
                <div className="column">
                    <h2>Welcome to CloudDrive Support!</h2>
                    <p>
                        This page is designed to help users understand CloudDrive.
                    </p>
                    <ListGroup as="ol" numbered>
                        <ListGroup.Item>Accounts</ListGroup.Item>
                        <ListGroup.Item>Documents</ListGroup.Item>
                        <ListGroup.Item>Adding Documents</ListGroup.Item>
                        <ListGroup.Item>Removing Documents</ListGroup.Item>
                        <ListGroup.Item>Troubleshooting</ListGroup.Item>
                        <ListGroup.Item>About Us</ListGroup.Item>
                    </ListGroup>
                    <Tab.Container>
                        <Row>
                            <Col>
                                <h3>Accounts</h3>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Creating an Account</ListGroup.Item>
                                    <ListGroup.Item>Changing Account Details</ListGroup.Item>
                                    <ListGroup.Item>Deleting an Account</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col>
                                <h3>Documents</h3>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Adding a Document</ListGroup.Item>
                                    <ListGroup.Item>Removing a Document</ListGroup.Item>
                                    <ListGroup.Item>Creating a Document</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>About Us</h3>
                                <p>
                                    We are CloudDrive. Our mission is to provide users seamless access to files and documents. We are a 
                                    four-person team.  
                                </p>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </section>
        </div>
        </>
    )
}

export default HelpPage