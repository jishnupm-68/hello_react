const heading = React.createElement('h1', {id: "heading"}, "Hello react using react")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
console.log("heading ", heading);
console.log("root ", root);


const parent = React.createElement('div',{id:"parent"}, [
    React.createElement('div',{id:"child1"}, [
        React.createElement('h1', {}, "I am an h1 tag"),
        React.createElement('h2', {}, "I am an h2 tag"),
        React.createElement('h3', {}, "I am an h3 tag"),
    ]),
]);
console.log("parent",parent)
root.render(parent);