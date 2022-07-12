import React from "react";
import News1 from "./NewsElement/News1";
import News2 from "./NewsElement/News2";
import {Helmet} from "react-helmet";

function News() {
    return (
    <>    
        <Helmet>
            <title>CFL Indonesia - News Page</title>
        </Helmet>
        <News1 />   
        <News2 />
    </>       
    )
}

export default News;
