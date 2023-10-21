import { React, useEffect, useState } from "react";

/* Styles */
import "./style.css";

/* Images */
import userIcon from "../../../public/assets/images/user.png";

const NavBar = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if(localStorage.getItem("JWT-Token"))
            setLoggedIn(true);
        else
            setLoggedIn(false);
    }, []);

    return (
        <div className="container-navbar">
            <div className="c-absolute">
                <nav className="c-nav">
                    <ul className="c-n-ul">
                        <li className="c-n-item">Home</li>
                        <li className="c-n-item">About</li>
                        <li className="c-n-item">Contact</li>
                        {isLoggedIn ? <li className="profile-btn"><img className="c-n-userIcon-logo" src={ userIcon } alt="User icon logo"/></li> : <li className="login-btn">Login</li>}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;