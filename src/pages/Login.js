import React from "react";
import Login1 from "./LoginElement/Login1";
import { Helmet } from "react-helmet";


export default function Login() {

    return (
    <>  
        <Helmet>
            <title>Login Page</title>
        </Helmet>
        <Login1 />  
        </>       
    );
}
