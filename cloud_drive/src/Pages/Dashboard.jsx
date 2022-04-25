import Form from 'react-bootstrap/Form'
import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Navbarf from "../Components/Navbarf";
import "./Dashboard.css"

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
      <h1 className='display-3'>Dashboard </h1>
      <h2>Welcome {user.displayName},</h2>
      <h2>Email : {user.email}</h2>
      <div className='container position-absolute top-50 start-50 translate-middle'>
        <div className='row'>
          <div className='column'>
              <div className='d-grid gap-2'>
                <button onClick={logout} className='btn btn-lg rounded-pill shadow' id='dashbutton'>Log out</button>
                <button onClick={reset} className='btn btn-lg rounded-pill shadow' id='dashbutton'>Reset Password</button>
                <button className='btn btn-lg rounded-pill shadow' id='dashbutton'>Delete Account</button>
                <button type='button' className='btn btn-lg rounded-pill shadow' id='dashbutton' data-bs-toggle='collapse' data-bs-target='#profilepicForm' aria-expanded='false' aria-controls='profilepicForm'>Change Profile Picture</button>
              </div>
              <Form onSubmit={onSubmit} id="profilepicForm" className='collapse'>
                <Form.FloatingLabel>Picture URL</Form.FloatingLabel>
                <Form.Control ref={imageURL}></Form.Control>
                <button type='submit' className='btn btn-lg'>Change</button>
              </Form>
          </div>
          <div className='column'>
            {/*Table with all documents displayed here*/}
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Dashboard;