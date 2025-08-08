import { useState } from "react"
const User = (props)=>{
    const [count, setCount] = useState(0);
    return(
        <div className=" bg-gray-50 p-5 m-5" >
            <h3>Component made using function</h3>
            <h3>{props.name}</h3>
            <h4>Location: kerala</h4>
            <h4>contact number:1234567890</h4>
            </div>
    )
}

export default User