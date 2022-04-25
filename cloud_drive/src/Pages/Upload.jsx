import React, { useRef } from "react";
import Navbarf from "../Components/Navbarf";

function UploadButton() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };
  return (
    <>
        <Navbarf/>
        <div className="m-3">
            <label className="mx-3">Choose file: </label>
            <input ref={inputRef} className="d-none" type="file" />
            <button onClick={handleUpload} className="btn btn-outline-primary">Upload</button>
        </div>
    </>
    
  );
}

export default UploadButton;