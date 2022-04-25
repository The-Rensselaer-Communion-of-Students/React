import { useEffect, useReducer, useState} from "react";
import axios from "axios";
import { UserContext, useUserContext } from "../context/userContext";
import { async } from "@firebase/util";
import {database} from '../firebase/firestore'
let ACTIONS ={
    SELECT_FOLDER: 'select-folder',
    UPDATE_FOLDER: 'update-folder',
    SET_CHILD_FOLDERS:'set-child-folders',
    ADD_FOLDER: 'add folder'
}
export const ROOT_FOLDER={name: 'Root', id:null, path:[], addf:false}
function reducer(state, {type, payload}){
    switch(type){
        case ACTIONS.SELECT_FOLDER:
            return {
                folderId: payload.folderId,
                folder: payload.folder,
                childFiles: [],
                childFolders: []
            }
        case ACTIONS.UPDATE_FOLDER:
            return {
                ...state,
                folder: payload.folder
            }
        case ACTIONS.SET_CHILD_FOLDERS:
            return {
                ...state,
                childFolders: payload.childFolders,
                addf:false
            }
        default:
            return state
    }

}
export function useFolder(folderId=null,folder=null){
    let [state, dispatch]=useReducer(reducer,{
        folderId,
        folder,
        childFolders:[],
        childFiles:[],
        addf:false,
    })
    let {user} = useUserContext();
    useEffect(()=>{
        dispatch({type: ACTIONS.SELECT_FOLDER, payload:{folderId,folder}})
    }, [folderId,folder])
    useEffect(()=>{
        if (folderId == null) {
            return dispatch({
              type: ACTIONS.UPDATE_FOLDER,
              payload: { folder: ROOT_FOLDER },
            })
          }
      
          database.folders
            .doc(folderId)
            .get()
            .then(doc => {
              dispatch({
                type: ACTIONS.UPDATE_FOLDER,
                payload: { folder: database.formatDoc(doc) },
              })
            })
            .catch(() => {
              dispatch({
                type: ACTIONS.UPDATE_FOLDER,
                payload: { folder: ROOT_FOLDER },
              })
            })
        
    },[folderId])
    useEffect(()=>{
        return database.folders
      .where("parentId", "==", folderId)
      .where("userId", "==", user.uid)
      .orderBy("createdAt")
      .onSnapshot(snapshot => {
        dispatch({
          type: ACTIONS.SET_CHILD_FOLDERS,
          payload: { childFolders: snapshot.docs.map(database.formatDoc) },
        })
      })      
    },[folderId,user])
    useEffect(() => {
        return (
          database.files
            .where("folderId", "==", folderId)
            .where("userId", "==", user.uid)
            // .orderBy("createdAt")
            .onSnapshot(snapshot => {
              dispatch({
                type: ACTIONS.SET_CHILD_FILES,
                payload: { childFiles: snapshot.docs.map(database.formatDoc) },
              })
            })
        )
      }, [folderId, user])
    
    return state;
    
    
}