import React from "react";
import { Spinner } from "react-bootstrap";

function Spinnner() {
    return (
        <div className="Puteran">
            <Spinner animation="border" role="status"></Spinner>
            <span>Loading Data</span>
        </div>
    );
}

export default Spinnner;
