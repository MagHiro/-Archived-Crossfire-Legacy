import React from "react";
import { Parallax } from "react-parallax";
import newsfoto from "./../../assets/news-header.webp";

function Download1() {
    return (
        <Parallax className="Download1" blur={4} bgImage={newsfoto} bgImageStyle={{ opacity: ".5" }} strength={0}>
            <h1>Download Page</h1>
        </Parallax>
    );
}

export default Download1;
