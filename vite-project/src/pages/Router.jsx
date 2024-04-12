import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Admin from './Admin'
import Login from '../pages/Login'
import Home from './Home'
import Settings from './Settings'



const router= createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Login/>,
            },
            {
                path: "/admin",
                element: <Admin/>,
            },
            {
                path: "/home",
                element: <Home/>,
            },
            {
                path: "/settings",
                element: <Settings/>
            },
        ]
    }
])

export default router