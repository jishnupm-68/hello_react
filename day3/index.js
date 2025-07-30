import React from 'react';
import ReactDOM from 'react-dom/client';
import { WiEarthquake } from "react-icons/wi";



// //react element
// const heading  = React.createElement(
//     "h3",
//     {id: "heading"},
//     "Hello World from React☺☺"
// )

// const jsxHeading = <h1 id="heading">Hello World from React using JSX☺☺</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log("heading", heading) // it is an object
// console.log("root", root);

// const Testing = ()=>{
//     return <h1>testing my code in various places</h1>
// }
// root.render(heading)
// root.render(jsxHeading);

// const HeadingComponent = () =>{
//     return (
//         <>
//             <Testing >{jsxHeading}</Testing>
//             <h1 id="heading">Hello react  from React using JSX in a functional Component 😁😁</h1>
//             <h2>learning syntax</h2>
//         </>
//     )
// }

// root.render(<HeadingComponent />);


// //when the object is rendered, it will be converted to HTML and displayed in the browser
// // React will convert the object to HTML and display it in the browser


// //jsx => babel transpiles it to React.createElement
// // React.createElement => creates an object that represents the element





// //creating elements using React.createElement and JSX


// // React.createElement is used to create elements in React without JSX
// let reactElement = React.createElement('div', {id:"title"},
//     React.createElement('h1', null, 'Hello World from React using React.createElement'),
//     React.createElement('h2', null, 'Learning React')
// )

// // JSX is a syntax extension for JavaScript that looks similar to XML or HTML
// // It allows you to write HTML-like code within JavaScript, which is then transformed into React
// let reactJsxElement = (
//     <div id="title">
//         <h1>Hello World from React using JSX</h1>
//         <h2 style={{color: "brown"}}>Learning React</h2>
//     </div>
// )

// // making functional component using jsx
// const ReactFunctionComponent = () => {
//     return (
//         <div id='title'>
//             <h1>Hello World from React using Function Component</h1>
//             <h2>Learning React</h2>
//         </div>
//     )
// }
// root.render(<ReactFunctionComponent />);


const Heading = ()=>{
    return (
        <h1 className="heading">this is heading</h1>
    )
}

const SearchBar = () =>{
    return (
        <div className='searchbar'>
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
        </div>
    )
}

const MyIcon = () =>{
    return (
        <div className='user-icon'>
            <WiEarthquake className="icon" size={50} color="red" />
        </div>
    )
}

const Header = () => {

    return (
        <>
        <div className="header">
            <Heading />
            <SearchBar />
            <MyIcon />
        </div>
            
        </>
        
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);