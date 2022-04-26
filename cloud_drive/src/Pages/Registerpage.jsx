
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import "./Registerpage.css"
import Navbarf from '../Components/Navbarf'
import * as Yup from 'yup';
import { Formik } from "formik";
import { userSchema } from '../Validation/validation';

export default function Registerpage() {
    const emailRef = useRef();
    const nameRef = useRef();
    const psdRef = useRef();
    const cnfPsdRef = useRef();
    const navigate = useNavigate();
    const {user, loading, error, registerUser } = useUserContext();
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const password = psdRef.current.value;
        const confirmedPassword = cnfPsdRef.current.value;
        const isValid = await userSchema.isValid({email, password, confirmedPassword, name});
        console.log(isValid);
        if (email && password && name && isValid) registerUser(email, password, name);
        else if (!email || !password || !name) {
            alert("Please fill in all fields");
        } 
        else if (password !== confirmedPassword) {
            alert('Both passwords must match');
            return;
        }
        {loading ? <h2>Loading...</h2> : <> {user ?  navigate("/dashboard"):<></> } </>}    }

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
/*
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
                      
                      {/* Password confirmation }
                      {/* Create another form control, onSubmit check for different text between Password and Confirm Password fields }
  /*
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                      {/* Password confirmation END }
/*                      
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
*/
  )
}
