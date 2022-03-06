import React from "react";
import "./header.css";

function Header() {
    return (
        <div className="header">
            <div className="header__navbar">
                <div className="logo"><img src="/Logo.svg"></img></div>
                <div className="nav">
                    <div className="elem elem__telegram"><img src="/telegram.svg"></img></div>
                    <div className="elem"><img src="/mail.svg"></img></div>  
                    <div className="elem elem__phone"><img src="phone.svg"></img><span className="phone">+7 800 301-79-27</span></div>
                    <div className="elem"><button className="start">Начать проект</button></div> 
                </div>  
            </div>
        </div>
    );
}

export default Header;