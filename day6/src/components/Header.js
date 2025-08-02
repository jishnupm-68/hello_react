const {LOGO_URL} = require('../utils/constant');

const {useState} = require('react');

const Header = ()=>{
    const [loginButton, setLoginButton] = useState("Login");
    return (
        <div className = "header">
            <div className = "logoContainer">
                <img className='logo' src={LOGO_URL}></img>
            </div>
            <div className = "navItems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <button className='login' onClick={() => {
                        loginButton === "Logout" ? setLoginButton("Login") : setLoginButton("Logout");
                    }}>{loginButton}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header; 