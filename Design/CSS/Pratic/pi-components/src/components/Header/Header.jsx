import { React } from "react";

/* Styles */
import "./style.css";

/* Images */
import kernelLogo from "../../../public/assets/images/kernel-logo.png";


function Header() {
    return(
        <div className="container-header">
            <h1 className="c-h-title"><span className="c-h-t-text">Kernel</span>&nbsp;<span className="arrow-left">&lt;</span><span className="arrow-center">/</span><span className="arrow-right">&gt;</span></h1>
            <img className="c-h-subtitle" src="https://readme-typing-svg.herokuapp.com/?color=000000&size=14&center=true&vCenter=true&width=370&lines=An+amazing+social+network+for+everyone!+🥳;Be+part+of+you+too!+💪;From+programmers+to+non-programmers!+🚀;Sign-Up+and+explore+a+new+world!+🌎" alt="substitle" />
        </div>
    );
}

export default Header;