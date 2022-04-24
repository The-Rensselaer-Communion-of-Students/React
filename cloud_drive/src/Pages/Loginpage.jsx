import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import "./Loginpage.css"


export default function Loginpage() {
        const emailRef = useRef();
        const psdRef = useRef();
        const {user, loading, error, signInUser} = useUserContext();
        const navigate = useNavigate();
        const onSubmit = (e) => {
          e.preventDefault();
          const email = emailRef.current.value;
          const password = psdRef.current.value;
          if (email && password) signInUser(email, password);
      {loading ? <h2>Loading...</h2> : <> {user ?  navigate("/dashboard"):<></> } </>}
        };
  return (
    <div id="w">
        <div id="w2">
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
        <Form id="login" onSubmit={onSubmit}>
            <Form.Label>Email Adress</Form.Label>
            <Form.Control type="email" placeholder="example@gmail.com" ref={emailRef}/>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={psdRef}/>
            <hr className="solid"/>
            <div className="d-grid gap-2">
            <Button variant="primary" type="submit" size="lg" className='rounded-pill'>Login</Button>
            <Button variant="primary" type="submit" size="lg" className='rounded-pill'>Sign In With Google</Button>
            </div>
        </Form>
        </div>
    </div>
  )
}
