import { useEffect, useReducer, useState} from "react";
import axios from "axios";
import { UserContext, useUserContext } from "../context/userContext";
import { async } from "@firebase/util";
let ACTIONS ={
    SELECT_FOLDER: 'select-folder',
    UPDATE_FOLDER: 'update-folder',
    SET_CHILD_FOLDERS:'set-child-folders',
    ADD_FOLDER: 'add folder'
}
let ROOT_FOLDER={name: 'Root', id:null, path:[], addf:false}
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
        function formatdoc(doc){
            return{"id":doc._id,"name":doc.name,"ParentID":doc.ParentID, "userID":doc.userID,"timestamp":doc.timestamp};
        }
        async function fetchData(){
            let res = await axios.get("http://localhost:3001/getfolder/"+folderId).catch(res=>{
                return dispatch({
                    type: ACTIONS.UPDATE_FOLDER, 
                    payload: {folder: ROOT_FOLDER}
                })  
            })
            return dispatch({
                type: ACTIONS.UPDATE_FOLDER, 
                payload: {folder: formatdoc(res.data)}
            })
        }
        if(folderId==null){
            return dispatch({
                type: ACTIONS.UPDATE_FOLDER, 
                payload: {folder: ROOT_FOLDER}
            })
        }
        let s=fetchData();
        
        
    },[folderId])
    useEffect(()=>{
        var request = new XMLHttpRequest();
        let data=null;
	request.open('GET', "http://localhost:3001/getfolderkid/"+folderId+"/"+user.uid, true);
	
	request.onload = () => {
		if (request.readyState === 4 && request.status === 200) {
			console.log((JSON.parse(request.responseText)));
            data=JSON.parse(request.responseText);
            return dispatch({
                type: ACTIONS.SET_CHILD_FOLDERS, 
                payload: {childFolders: data}
            })
		} else {
			//Error
            console.log("HELL");
		}
	};
	request.send();        
    },[folderId,user,state.addf])
    return state;
    
    
}