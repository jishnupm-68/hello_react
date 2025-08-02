import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


/**
 * header
 * --logo
 * -- nav items -home, about, contact
 * body 
 * -- search bar
 * -- resturant container=> card(name, image, address)
 * footer
 * --copy right
 * --links
 * 
 * 
 */



const root = ReactDOM.createRoot(document.getElementById('root'));
const AppLayout = () => {
    return(
        <div className = "app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}


root.render(<AppLayout />);