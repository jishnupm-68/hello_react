const {LOGO_URL} = require('../utils/constant');


const Header = ()=>{
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
                </ul>
            </div>
        </div>
    )
}

export default Header; 