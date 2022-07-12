import React from "react";
import { Container } from "react-bootstrap";
import Download2Element1 from "./Download2Element1";
import Download2Element2 from "./Download2Element2";
import Download2Element3 from "./Download2Element3";

function Download2() {
    return (
        <Container className="Download2">
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                        className="nav-link active"
                        id="nav-download-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-download"
                        type="button"
                        role="tab"
                        aria-controls="nav-download"
                        aria-selected="true"
                    >
                        DOWNLOAD FOR WINDOWS
                    </button>
                    <button
                        className="nav-link"
                        id="nav-android-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-android"
                        type="button"
                        role="tab"
                        aria-controls="nav-android"
                        aria-selected="false"
                    >
                        DOWNLOAD FOR PHONE
                    </button>
                    <button
                        className="nav-link"
                        id="nav-system-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-system"
                        type="button"
                        role="tab"
                        aria-controls="nav-system"
                        aria-selected="false"
                    >
                        SYSTEM REQUIREMENTS
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="nav-download"
                    role="tabpanel"
                    aria-labelledby="nav-download-tab"
                    tabIndex="0"
                >
                    <Download2Element1 />
                </div>
                <div
                    className="tab-pane fade"
                    id="nav-android"
                    role="tabpanel"
                    aria-labelledby="nav-android-tab"
                    tabIndex="0"
                >
                    <Download2Element2 />
                </div>
                <div
                    className="tab-pane fade"
                    id="nav-system"
                    role="tabpanel"
                    aria-labelledby="nav-system-tab"
                    tabIndex="0"
                >
                    <Download2Element3 />
                </div>
            </div>
        </Container>
    );
}

export default Download2;
