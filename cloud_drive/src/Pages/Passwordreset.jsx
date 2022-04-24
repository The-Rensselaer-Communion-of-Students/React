import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Navbarf from '../Components/Navbarf';


export default function ResetPage() {
    const { user, forgotPassword } = useUserContext()
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
            <div className='container'>
                <section className='row'>
                    <Form onSubmit={resetSubmit}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={resetEMAIL} required></Form.Control>      
                        <Button type="submit">Reset</Button>
                    </Form>
                </section>
            </div>
        </>
    )
}