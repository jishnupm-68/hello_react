import React,{lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from  './components/Error';
import RestMenu from './components/RestMenu';
import {  createBrowserRouter, RouterProvider, Outlet} from 'react-router';
import Shimmer from './components/Shimmer';
// import Grocery from './components/Grocery';

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
const Grocery = lazy(()=>import('./components/Grocery'))


const root = ReactDOM.createRoot(document.getElementById('root'));
const AppLayout = () => {
    return(
        <div className = "app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const appRouter =   createBrowserRouter
([
    {
    path: "/",
    element: <AppLayout />,
    children:[
        {
            path:"/",
            element:<Body />
        },
        {
        path:"/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    
    },{
        path:"/resturants/:resId",
        element:<RestMenu />
    },
    {
        path:'/grocery',
        element:<Suspense fallback={<Shimmer />}><Grocery /></Suspense>
    }
],
    errorElement: <Error />
    },
    
]);

root.render(<RouterProvider router={appRouter} />);