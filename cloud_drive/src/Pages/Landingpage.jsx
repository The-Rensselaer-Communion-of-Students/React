import React from 'react'
import Navbarf from '../Components/Navbarf'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
export default function Landingpage() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(path);
  }
  return (
      <>
      <Navbarf></Navbarf>
      <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: '0',
    backgroundImage:'url(cloud.jpg)',
    backgroundSize: 'cover',
    overflow: 'hidden',
    flexDirection: 'column',
}}>
    <h1 className="display-1 text-white">CloudDrive <br/></h1>
    <h2 className="display-3 ">Cloud Storage Simplified</h2>
    <br/><br/>
    <Button href="register" variant="light" size="lg" className="rounded-pill border border-secondary border-2"><h1 className='display-4'>Register</h1></Button> 
    <br/>
    <Button href="login" variant="light" size="lg" className="rounded-pill border border-secondary border-2"><h1 className='display-4'>Login</h1></Button> 
</div>
      
      </>
  )
}
