import Form from 'react-bootstrap/Form'
import { Button, Container, Row } from 'react-bootstrap'
import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Navbarf from '../Components/Navbarf';
import './Passwordreset.css'


export default function ResetPage() {
    const { user, forgotPassword, logoutUser } = useUserContext()
    const navigate = useNavigate()
    const resetEMAIL = useRef()
    var resetFail = null;
    function test() {
        alert("This email is not associated with any account related CloudDrive.")
        var resetFail = 1;
    }
    const resetSubmit = (e) => {
        e.preventDefault()
        if (resetEMAIL) {
            const reset_e = resetEMAIL.current.value
            forgotPassword(reset_e).catch((err) => test())
            if (!resetFail == null) {
                console.log(resetFail)
                alert("Follow the instructions sent to your email to complete the password reset process.")
            }
        }
    }

    return (
        <>
            <Navbarf></Navbarf>
            <div style={{
    display: 'flex',
    height: '100vh',
    margin: '0',
    backgroundImage:'url(cloud.jpg)',
    backgroundSize: 'cover',
    overflow: 'hidden',
    flexDirection: 'column',
}}>
            <h3 className='pt-4 ms-5 prTitle'>Reset Password</h3>
            <Container id="resetbg" className='position-absolute top-50 start-50 translate-middle rounded shadow'>
                <Row>
                    <Form onSubmit={resetSubmit}>
                        <Form.Label className='mb-3'>Email</Form.Label>
                        <Form.Control type='email' ref={resetEMAIL} className='mb-3' required></Form.Control>      
                        <Button type="submit" className='rounded-pill my-3' id="prReset">Reset</Button>
                    </Form>
                </Row>
            </Container>
            </div>
        </>
    )
}
