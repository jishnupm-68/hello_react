const {LOGO_URL} = require('../utils/constant');
import {Link} from "react-router"

const {useState, useEffect} = require('react');

const Header = ()=>{
    const [loginButton, setLoginButton] = useState("Login");
    return (
        <div className = "header">
            <div className = "logoContainer">
                <img className='logo' src={LOGO_URL}></img>
            </div>
            <div className = "navItems">
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li>
                        <Link to="/about">about
                        </Link>
                    </li>
                    <li><Link to="/contact">
                    Contact</Link></li>
                    <button className='login' onClick={() => {
                        loginButton === "Logout" ? setLoginButton("Login") : setLoginButton("Logout");
                    }}>{loginButton}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header; 