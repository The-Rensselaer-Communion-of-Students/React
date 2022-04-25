import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import "./Loginpage.css";
import Navbarf from '../Components/Navbarf';


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
        const resetRedirect = (e) => {
          navigate('/reset')
        }
  return (

    <>
    <Navbarf></Navbarf>
    <div id="w">
        <div id="w2" className="shadow-lg loginbox p-4">
            <h1 className='pt-3 pb-4'>Login</h1>
            {error && <p className="error">{error}</p>}
          <Form id="login" onSubmit={onSubmit}>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="example@gmail.com" ref={emailRef}/>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" ref={psdRef}/>
              <hr className="solid"/>
              <div className="d-grid gap-2 justify-content-center">
                <Button variant="primary" type="submit" size="lg" className='rounded-pill border-0 shadow'>Login</Button>
                <Button variant="primary" type="submit" size="lg" className='rounded-pill border-0 shadow'>Sign In With Google</Button>
                <Button variant="primary" type="button" size="lg" className='rounded-pill border-0 shadow' onClick={resetRedirect}>Reset Password</Button>
              </div>
          </Form>
        </div>
    </div>
    </>
/*
      <>
      <Navbarf/>
      <div id="w">
          <div id="w2">
              <h1>Sign In to Your Account</h1>
              {error && <p className="error">{error}</p>}
              <Form id="login" onSubmit={onSubmit}>
                  <Form.Label>Email Adress</Form.Label>
                  <Form.Control type="email" placeholder="example@gmail.com" ref={emailRef} />
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" ref={psdRef} />
                  <hr className="solid" />
                  <div className="d-grid gap-2">
                      <Button variant="success" type="submit" size="lg">Sign In</Button>
                      <p>or</p>
                      <Button variant="primary" type="submit" size="lg">Sign In With Google</Button>
                  </div>
                  <div id="dontHave">
                      {/* Forgot your password? stuff here [check userContext.js]}
                      /*<a href="register">Don't have an account?</a>
                  </div>
              </Form>
          </div>
      </div></>*/
  )
}
