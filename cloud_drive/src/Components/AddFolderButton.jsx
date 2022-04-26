import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useUserContext } from "../context/userContext";
import {database} from '../firebase/firestore'

export default function AddFolderButton({ currentFolder }) {
    const {user} = useUserContext();
    const [open, setOpen]= useState(false);
    const [name, setName]=useState(""); 
    function openModal(){
        setOpen(true);

    }
    function closeModal(){
        setOpen(false);
    }
    function creatFolder(e){
        e.preventDefault();
        if(currentFolder==null){
            return;
        }
        database.folders.add({
            name: name,
            parentId: currentFolder.id,
            userId: user.uid,
            createdAt: database.getCurrentTimestamp(),
          })
        //Make Folder In DB
        setName("");
        closeModal();
    }
  return (
      <>
      <Button onClick={openModal} variant="outline-success" size="sm">Add Folder</Button>
      <Modal show={open} onHide={closeModal}>
          <Form onSubmit={creatFolder}>
              <Modal.Body></Modal.Body>
              <Form.Group>
                  <Form.Label>Folder Name</Form.Label>
                  <Form.Control
                    type='text'
                    required
                    value={name}
                    onChange={e=> setName(e.target.value)}
                  />
              </Form.Group>
              <Modal.Footer>
                  <Button variant='secondary' onClick={closeModal}>Close</Button>
                  <Button variant='success' type='submit'>Add Folder</Button>
              </Modal.Footer>
          </Form>

      </Modal>
      </>
  )
  }
