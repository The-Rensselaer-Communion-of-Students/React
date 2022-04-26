import React from "react";
import Navbarf from "../Components/Navbarf";
import './Help.css'
import { useNavigate } from "react-router-dom";

const HelpPage = () => {
    const navigate = useNavigate()

    return (
        <>
        <Navbarf></Navbarf>
        <div className="container">
            <section className="row">
                <div className="column">
                    <h2>Welcome to CloudDrive Support!</h2>
                    <p>
                        This page is designed to help users understand CloudDrive.
                    </p>
                </div>
            </section>
        </div>
        </>
    )
}

export default HelpPage