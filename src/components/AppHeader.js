import React from "react";
import CompanyLogo from "./img/Bazaarvoice_logo.png";
import "./AppHeader.css";

const AppHeader = () => {
	return (
        <div className = "header">
            <img src={CompanyLogo} alt="BV logo"/>
            <div className="header-text">
                <h3>Bazaarvoice Task App</h3>
                <p>Development and Implemented by: Egle M. | Robertas A. | Kristupas G. during Bazaarvoice 2021 Virtual Hackathon</p>
            </div>
        </div>
    )
};

export default AppHeader;