import React from "react";
import { Parallax } from "react-parallax";
import newsfoto from "./../../assets/news-header.webp";

function News1() {
    return (
        <Parallax className="News1" blur={4} bgImage={newsfoto} bgImageStyle={{ opacity: ".5" }} strength={0}>
            <h1>News Page</h1>
        </Parallax>
    );
}

export default News1;
