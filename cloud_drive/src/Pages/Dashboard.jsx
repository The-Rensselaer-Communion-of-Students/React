import Form from 'react-bootstrap/Form'
import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Navbarf from "../Components/Navbarf";
<<<<<<< HEAD
import { Container } from "react-bootstrap";
import AddFolderButton from "../Components/AddFolderButton";
import { useFolder } from "../hooks/useFolder";
import Folder from "../Components/Folder";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AddFileButton from "../Components/AddFileButton";
import File from "../Components/File";
import FolderBreadcrumbs from '../Components/TopDash'
export default  function Dashboard(){
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder()
  
  //console.log(folder);
  //console.log(childFolders);
  const { user, logoutUser } = useUserContext();
=======
import "./Dashboard.css"
import { Table } from 'react-bootstrap';

const Dashboard = () => {
  const { user, logoutUser, changeProfilePic } = useUserContext();
>>>>>>> 77a643b95c3c0506c40d7601430888e3d89a43f9
  const navigate = useNavigate();
  function logout(){
    console.log(childFolders);
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
    <Container fluid>
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
    </Container>
      <button onClick={logout}>Log out</button>
    </>
   
  );
};
