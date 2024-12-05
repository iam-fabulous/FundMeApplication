import { Children } from "react";
import Layout from "../layout/Layout";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import Page from "../Page";
import SignUpLayout from "../layout/SignUpLayout";


export const Router = [
    {
        path: "/",
        element:<Layout/>,
        children:[
            
            {
                path: "/page",
                element:<Page/>,
            }
        ]
           
    },
    {
        path: "/",
        element: <SignUpLayout/>,
        children: [
              {
                path: '/signup',
                element: <SignUp/>
            },
             
             {
                path: '/login',
                element: <Login/>
            },

        ]
    }
   
]

export default Router;
