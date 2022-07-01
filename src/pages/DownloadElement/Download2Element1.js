import React from "react";
import logowindows from "./../../assets/windows-logo.png";
import { Card, Container } from "react-bootstrap";

function Download2Element1(){
    return(
        <div className="Download2Element1">
            <Card>
                <h1 className="mt-4">CROSSFIRE LEGACY ON WINDOWS</h1>
                <section>
                    <div className="col">
                        <h1><span>FULL</span><span> CLIENT</span></h1>
                        <table  className="tablespec">
                            <tbody>
                                <tr>
                                    <th>UKURAN CLIENT</th>
                                    <td>12.4 GB</td>
                                </tr>
                                <tr>
                                    <th>UPDATE TERAKHIR</th>
                                    <td>2022-06-23</td>
                                </tr>
                                <tr>
                                    <th>CLIENT VERSION</th>
                                    <td>CFID LEGACY 001</td>
                                </tr>
                            </tbody>
                        </table>
                        <button><a href="#">DOWNLOAD NOW</a></button>
                    </div>
                    <div className="col">
                    <h1><span>PARTIAL</span><span> CLIENT</span></h1>
                        <table className="tablespec">
                            <tbody>
                                <tr>
                                    <th>UKURAN CLIENT</th>
                                    <td>12.8 GB</td>
                                </tr>
                                <tr>
                                    <th>UPDATE TERAKHIR</th>
                                    <td>2022-06-23</td>
                                </tr>
                                <tr>
                                    <th>CLIENT VERSION</th>
                                    <td>CFID LEGACY 001</td>
                                </tr>
                            </tbody>
                        </table>
                        <button><a href="#">DOWNLOAD HERE</a></button>
                    </div>
                </section>
            </Card>
        </div>
    )
}

export default Download2Element1