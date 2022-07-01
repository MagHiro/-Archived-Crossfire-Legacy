import React from "react";
import logowindows from "./../../assets/windows-logo.png";
import { Card, Container } from "react-bootstrap";

function Download2Element2(){
    return(
        <div className="Download2Element2">
            <Card>
                <h1 className="mt-4">CROSSFIRE LEGACY COMPANION APP</h1>
                <section>
                    <div className="col">
                        <h1><span>ANDROID</span><span> APP</span></h1>
                        <table  className="tablespec">
                            <tbody>
                                <tr>
                                    <th>UKURAN CLIENT</th>
                                    <td>NOT MEASURE</td>
                                </tr>
                                <tr>
                                    <th>UPDATE TERAKHIR</th>
                                    <td>NOT LISTED</td>
                                </tr>
                                <tr>
                                    <th>CLIENT VERSION</th>
                                    <td>NOT RELEASED</td>
                                </tr>
                            </tbody>
                        </table>
                        <button disabled><a href="#">DOWNLOAD NOW</a></button>
                    </div>
                    <div className="col">
                    <h1><span>IOS</span><span> APP</span></h1>
                        <table className="tablespec">
                            <tbody>
                                <tr>
                                    <th>UKURAN FILE</th>
                                    <td>NOT MEASURE</td>
                                </tr>
                                <tr>
                                    <th>UPDATE TERAKHIR</th>
                                    <td>NOT LISTED</td>
                                </tr>
                                <tr>
                                    <th>CLIENT VERSION</th>
                                    <td>NOT RELEASED</td>
                                </tr>
                            </tbody>
                        </table>
                        <button disabled><a href="#">DOWNLOAD HERE</a></button>
                    </div>
                </section>
            </Card>
        </div>
    )
}

export default Download2Element2