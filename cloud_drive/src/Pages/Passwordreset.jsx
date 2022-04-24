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
    const resetSubmit = (e) => {
        e.preventDefault()
        if (resetEMAIL) {
            const reset_e = resetEMAIL.current.value
            forgotPassword(reset_e)
        }
    }

    return (
        <>
            <Navbarf></Navbarf>
            <Form onSubmit={resetSubmit}>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' ref={resetEMAIL} required></Form.Control>      
                <Button type="submit">Reset</Button>
            </Form>
        </>
    )
}