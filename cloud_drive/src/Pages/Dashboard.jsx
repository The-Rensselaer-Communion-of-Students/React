import Form from 'react-bootstrap/Form'
import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Navbarf from "../Components/Navbarf";
import './Passwordreset.css'

const Dashboard = () => {
  const { user, logoutUser, changeProfilePic } = useUserContext();
  const navigate = useNavigate();
  const imageURL = useRef()
  console.log(user);
  function logout(){
      logoutUser()
      navigate("/")

  }
  function reset() {
    navigate("/reset")
  }
  function changeProfilePicture(picture) {
    
    changeProfilePic(picture)
  }
  function onSubmit(e) {
    e.preventDefault()
    console.log(imageURL.current.value)
    changeProfilePicture(imageURL.current.value)
  }
  return (
    <>
    <Navbarf/>
     <div>
      <h1>Dashboard </h1>
      <h2>Welcome {user.displayName},</h2>
      <h2>Email : {user.email}</h2>
      <button onClick={logout}>Log out</button>
      <button onClick={reset}>Reset Password</button>
      <button type='button' data-bs-toggle='collapse' data-bs-target='#profilepicForm' aria-expanded='false' aria-controls='profilepicForm'>Change Profile Picture</button>
      <Form onSubmit={onSubmit} id="profilepicForm" className='collapse'>
        <Form.FloatingLabel>Picture URL</Form.FloatingLabel>
        <Form.Control ref={imageURL}></Form.Control>
        <button type='submit'>Change</button>
      </Form>
    </div>
    </>
   
  );
};

export default Dashboard;