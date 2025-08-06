import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            userInfo:{
                name:"User",
                location:"User location"
            }
        };
        console.log("constructor called")
    }
    async componentDidMount(){
        const data= await fetch("  https://api.github.com/users/jishnupm-68")
        const dataJson = await data.json();
        console.log("component did mount")
        this.setState({
            userInfo:dataJson
        });
    }
   
    componentDidUpdate(){
        this.counter = setInterval(()=>{
            console.log("Hello interval")
        },1000)
        console.log("component did update")
    }
    componentWillUnmount(){
        clearInterval(this.counter);
        clearInterval(this.setState)
        console.log("component will unmount")
    }
    render(){
        console.log("render called")
        const {login, location,avatar_url} = this.state.userInfo;
        return(
        <div className="about-card" >
            <p>count: {this.state.count}</p> <button 
            onClick={
                ()=>{
                    this.setState({
                        count: this.state.count+1
                    })
                }
            }>Click</button>
            <h3>Component made using class</h3>
            <h3>{login}</h3> < img className="userImage" src={avatar_url}></img>
            <h4>Location: {location}</h4>
            <h4>contact number:1234567890</h4>
            </div>
    )

    }
}

export default UserClass