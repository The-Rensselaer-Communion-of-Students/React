import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Navbarf from '../Components/Navbarf';


export const Resetter = () => {
    const { user, logoutUser } = useUserContext();
    const navigate = useNavigate();
    console.log(user);

    return (
        <>
            <Navbarf></Navbarf>
            <Form>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email'></Form.Control>
            </Form>
        </>
    )
}

export default Resetter;