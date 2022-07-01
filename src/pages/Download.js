import React, { useState, useEffect } from "react";
import Download1 from "./DownloadElement/Download1";
import Download2 from "./DownloadElement/Download2";
import {Helmet} from "react-helmet";

function Download() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <>
            <Helmet>
                <title>CFL Download</title>
            </Helmet>
            <Download1 />
            <div style={{height : '100%'}}>
            <Download2 />
            </div>
        </>
    );
}

export default Download;
