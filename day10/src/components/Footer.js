const { useState } = require('react');

const Footer = ()=>{
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    let date = new Date().toLocaleDateString('in');
    console.log("Footer Rendered");
    setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
    }, 1000)
    return(
        <div className=" bg-gray-300 p-5 m-5 ">
            <h3 className=' font-medium text-amber-950'>Footer</h3>
           <div className='flex flex-col items-center '>
            <p className='bold '>Current time: {date+" "+time}</p>
            <p>Contact us: <a href="mailto:support@foodapp.com">support@foodapp.com</a></p>
            <p>© 2025 Food Delivery App</p>
           </div>
        </div>
    )
}

export default Footer;