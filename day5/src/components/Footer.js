const { useState } = require('react');


const Footer = ()=>{
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    let date = new Date().toLocaleDateString('in');
    setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
    }, 1000)
    return(
        <div className='footer'>
            <h3>Footer</h3>
            <p>current time: {date+" "+time}</p>
            <p>Contact us: <a href="mailto:support@foodapp.com">support@foodapp.com</a></p>
            <p>© 2025 Food Delivery App</p>
        </div>
    )
}

export default Footer;