import React from "react";
import Home1 from "./HomeElement/Home1";
import Home2 from "./HomeElement/Home2";
import Home3 from "./HomeElement/Home3";
import Home4 from "./HomeElement/Home4";

function Home() {
    return (
        <div>
            <div style={{height : '25%'}}>
                <Home1 />
            </div>
            <div style={{height : '25%'}}>
                <Home2 />
            </div>
            <div style={{height : '25%'}}>
                <Home3 />
            </div>
            <div style={{height : '25%'}}>
                <Home4 />
            </div>
        </div>
    );
}

export default Home;
