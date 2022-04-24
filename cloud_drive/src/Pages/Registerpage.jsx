
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import "./Registerpage.css"
import Navbarf from '../Components/Navbarf'
import * as Yup from 'yup';


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
      <>
      <Navbarf/>
      <div id="w">
              <div id="w2">
                  <h1>Sign Up for an Account</h1>
                  {error && <p className="error">{error}</p>}
                  <Form id="login" onSubmit={onSubmit}>
                      <Form.Label>Email Adress</Form.Label>
                      <Form.Control type="email" placeholder="example@gmail.com" ref={emailRef} />
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" ref={psdRef} />
                      
                      {/* Password confirmation */}
                      {/* Create another form control, onSubmit check for different text between Password and Confirm Password fields */}
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                      {/* Password confirmation END */}
                      
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="name" placeholder="Name" ref={nameRef} />
                      <hr class="solid" />
                      <div className="d-grid gap-2">
                          <Button variant="success" type="submit" size="lg" id="signup">Sign Up</Button>
                          <p>or</p>
                          <Button variant="primary" type="submit" size="lg" id="signup-google">Sign Up With Google</Button>
                      </div>
                      <div id="alreadyHave">
                          <a href="login">Already have an account?</a>
                      </div>
                  </Form>
              </div>
          </div></>
  )
}
