const {LOGO_URL} = require('../utils/constant');
import {Link} from "react-router"

const {useState, useEffect} = require('react');
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
    const [loginButton, setLoginButton] = useState("Login");
    const onlineStatus =  useOnlineStatus();
    return (
        <div className = "flex justify-between p-5 m-5 bg-gray-200 shadow-lg">
            <div className = "logoContainer">
                <img className='w-20' src={LOGO_URL}></img>
            </div>
            <div className = "navItems flex items-center">
                <ul className="flex">
                    <li className="px-4"><Link to="/">home</Link></li>
                    <li className="px-4">
                        <Link to="/about">about
                        </Link>
                    </li>
                    <li className="px-4"><Link to="/contact">
                    Contact</Link></li>
                    <button className='px-3 py-1 bg-gray-500 text-white hover : text-amber-100' onClick={() => {
                        loginButton === "Logout" ? setLoginButton("Login") : setLoginButton("Logout");
                    }}>{loginButton}</button>
                    <li className="px-4">
                     {onlineStatus? "✅":"Internet:❌"}
                    </li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header