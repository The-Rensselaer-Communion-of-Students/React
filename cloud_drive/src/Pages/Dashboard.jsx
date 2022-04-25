import React from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Navbarf from "../Components/Navbarf";
import { Container } from "react-bootstrap";
import AddFolderButton from "../Components/AddFolderButton";
import { useFolder } from "../hooks/useFolder";
import Folder from "../Components/Folder";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AddFileButton from "../Components/AddFileButton";
export default  function Dashboard(){
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder()
  
  //console.log(folder);
  //console.log(childFolders);
  const { user, logoutUser } = useUserContext();
  const navigate = useNavigate();
  function logout(){
    console.log(childFolders);
      logoutUser()
      navigate("/")

  }
  return (
    <>
    <Navbarf/>
    <Container fluid>
      <AddFolderButton currentFolder={folder}/>
      <AddFileButton currentFolder={folder}/>
      {folder && <Folder folder={folder}></Folder>}
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
    </Container>
      <button onClick={logout}>Log out</button>
    </>
   
  );
};

