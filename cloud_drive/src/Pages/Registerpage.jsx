
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import "./Registerpage.css"

export default function Registerpage() {
    const emailRef = useRef();
    const nameRef = useRef();
    const psdRef = useRef();
    const navigate = useNavigate();
    const {user, loading, error, registerUser } = useUserContext();
    
    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const password = psdRef.current.value;
        if (email && password && name) registerUser(email, password, name);
        {loading ? <h2>Loading...</h2> : <> {user ?  navigate("/dashboard"):<></> } </>}
    }
  return (
    <div id="w">
    <div id="w2" className='loginbox p-4'>
        <h1>Signup</h1>
        {error && <p className="error">{error}</p>}
    <Form id="login" onSubmit={onSubmit}>
        <Form.Label>Email Adress</Form.Label>
        <Form.Control type="email" placeholder="example@gmail.com" ref={emailRef}/>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={psdRef}/>
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Name" ref={nameRef}/>
        <hr class="solid"/>
        <div className="d-grid gap-2 justify-content-center pt-4">
        <Button variant="primary" type="submit" size="lg" className='rounded-pill border-0'>Sign Up</Button>
        <Button variant="primary" type="submit" size="lg" className='rounded-pill border-0'>Sign Up With Google</Button>
        </div>
    </Form>
    </div>
</div>
  )
}
