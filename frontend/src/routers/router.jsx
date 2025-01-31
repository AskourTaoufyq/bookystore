import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import App from '../App';
import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import About from '../components/About';
import Blog from '../components/Blog';
import Singlebook from '../components/Singlebook';
import Dashboardlayout from '../Dashboard/Dashboardlayout';
import Uploadbook from '../Dashboard/Uploadbook';
import Mangebook from '../Dashboard/Mangebook';
import Dashboard from '../Dashboard/Dashboard';
import Editbooks from '../Dashboard/Editbooks';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/Shop',
                element: <Shop/>
                
            },
            {
                path: '/About',
                element: <About/>
            },
            {
                path: '/Blog',
                element: <Blog/>
            },
            {
                path: '/Singlebook',
                element: <Singlebook/>
            },
            {
                path: "book/:id",
                element: <Singlebook/>,
                loader: ({params}) => fetch('http://localhost:5000/book/${params.id}')
            }
        ],
    },
    {
        path: '/admin/Dashboard',
        element: <Dashboardlayout/>,
        children: [
            {
                path: '/admin/Dashboard',
                element: <Dashboard/>
            },
            {
                path: '/admin/Dashboard/upload',
                element: <Uploadbook/>
            },
            {
                path: '/admin/Dashboard/mange',
                element: <Mangebook/>
            },
            {
                path: '/admin/Dashboard/editbooks/:id',
                element: <Editbooks/>,
                loader: ({params}) => fetch('http://localhost:5000/book/${params.id}')
            }
        ]
    }
]);

export default router;