import React from "react";
import Register1 from "./RegisterElement/Register1";
import { Helmet } from "react-helmet";


export default function Register() {
        return(
            <>
                <Helmet>
                    <title>Register Page</title>
                </Helmet>
                <Register1 />
            </>
    );
}
