import Form from 'react-bootstrap/Form'
import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Navbarf from "../Components/Navbarf";
import { Button, Container, Row, Col } from "react-bootstrap";
import AddFolderButton from "../Components/AddFolderButton";
import { useFolder } from "../hooks/useFolder";
import Folder from "../Components/Folder";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AddFileButton from "../Components/AddFileButton";
import File from "../Components/File";
import FolderBreadcrumbs from '../Components/TopDash'
import './Dashboard.css'
export default  function Dashboard(){
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder()
  
  //console.log(folder);
  //console.log(childFolders);
  const { user, logoutUser } = useUserContext();
  const navigate = useNavigate();
  console.log(user)
  function logout(){
    console.log(childFolders);
      logoutUser()
      navigate("/")

  }
  function reset() {
    navigate("/reset")
  }
  return (
    <>
    <Navbarf/>
    
    <div style={{
    display: 'flex',
    height: '100vh',
    margin: '0',
    backgroundImage:'url(cloud.jpg)',
    backgroundSize: 'cover',
    overflow: 'hidden',
    flexDirection: 'column',
}}>
  
    <h3 id="DashboardWelcome" className='pt-4 ps-5'>Welcome {user.displayName}!</h3>
    
    <Container fluid>

    <Container className='position-absolute top-50 start-50 translate-middle'>
      <Row>
        <Col id="AccountInfo">
          <h4 id='emailFormatting'>Email: {user.email}</h4>
          <div id='ButtonFormatting' className='d-grid gap-3'>

            <Button onClick={reset} className="rounded-pill" id="logoutButton">Change Password</Button>
            <Button onClick={logout} className="rounded-pill" id="logoutButton">Log out</Button>
          </div>
        </Col>
        <Col id="folderBG" className='rounded shadow'>
            <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder}/>
          <AddFolderButton currentFolder={folder}/>
          <div className="d-flex align-items-center">
            </div>
            {childFolders.length > 0 && (
              <div className="d-flex flex-wrap">
                {childFolders.map(childFolder => (
                  <div
                    key={childFolder.id}
                    style={{ maxWidth: "250px" }}
                    className="p-2"
                  >
                    <Folder folder={childFolder} />
                  </div>
                ))}
              </div>
            )}
            {childFolders.length > 0 && childFiles.length > 0 && <hr />}
            {childFiles.length > 0 && (
              <div className="d-flex flex-wrap">
                {childFiles.map(childFile => (
                  <div
                    key={childFile.id}
                    style={{ maxWidth: "250px" }}
                    className="p-2"
                  >
                    <File file={childFile} />
                  </div>
                ))}
              </div>
            )}
        </Col>
      </Row>
    </Container>


    
    </Container>
    
    </div>
    </>
  );
};
