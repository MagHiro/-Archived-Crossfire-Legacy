import React from "react";
import { Card, Container } from "react-bootstrap";

function Download2Element3(){
    return(
        <div className="Download2Element3">
            <Card>
                <h1 className="mt-4">SYSTEM REQUIREMENTS</h1>
                <div class="d-flex align-items-start">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active" id="v-pills-processor-tab" data-bs-toggle="pill" data-bs-target="#v-pills-processor" type="button" role="tab" aria-controls="v-pills-processor" aria-selected="true">Processor</button>
                        <button class="nav-link" id="v-pills-memory-tab" data-bs-toggle="pill" data-bs-target="#v-pills-memory" type="button" role="tab" aria-controls="v-pills-memory" aria-selected="false">Memory</button>
                        <button class="nav-link" id="v-pills-videocard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-videocard" type="button" role="tab" aria-controls="v-pills-videocard" aria-selected="false">Video Card</button>
                        <button class="nav-link" id="v-pills-storage-tab" data-bs-toggle="pill" data-bs-target="#v-pills-storage" type="button" role="tab" aria-controls="v-pills-storage" aria-selected="false">Storage</button>
                        <button class="nav-link" id="v-pills-os-tab" data-bs-toggle="pill" data-bs-target="#v-pills-os" type="button" role="tab" aria-controls="v-pills-os" aria-selected="false">OS</button>
                    </div>
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-processor" role="tabpanel" aria-labelledby="v-pills-processor-tab" tabindex="0">
                                    
                            <ul>
                                <li>Minimum:</li>
                                <li>AMD Athlon™ 64 X2 Dual Core
                                Processor 4600+ 2.4GHz</li>
                                <li>Intel® Core™2 Duo Processor</li>
                            </ul>
                            <ul>
                                <li>Recommended:</li>
                                <li>AMD Ryzen™ 3 1200 Processor @
                                3.1GHz (4 Cores), ~3.4GHz</li>
                                <li>Intel® Core™ i5-3470 Processor @
                                3.20GHz (4 Cores),~3.2GHz</li>
                            </ul>
                                        
                        </div>
                        <div class="tab-pane fade" id="v-pills-memory" role="tabpanel" aria-labelledby="v-pills-memory-tab" tabindex="0">
                    
                            <ul>
                                <li>Minimum:<br/>4 GB</li>
                            </ul>    
                            <ul>    
                                <li>Recommended:<br/> 8 GB</li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="v-pills-videocard" role="tabpanel" aria-labelledby="v-pills-videocard-tab" tabindex="0">
                            <ul>
                                <li>Minimum:</li>
                                <li>NVIDIA® GeForce® 9500 GT</li>
                                <li>AMD Radeon™ HD 6450</li>
                                <li>Intel® HD Graphics 3000</li>
                            </ul>
                            <ul>
                                <li>Recommended:</li>
                                <li>NVIDIA® GeForce® GT 630</li>
                                <li>AMD Radeon™ HD 6570</li>
                                <li>Intel® HD Graphics 6000</li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="v-pills-storage" role="tabpanel" aria-labelledby="v-pills-storage-tab" tabindex="0">
                            <ul>
                                <li>Minimum:</li>
                                <li>15 GB of free space</li>
                            </ul>
                            <ul>    
                                <li>Recommended:</li>
                                <li>25 GB of free space</li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="v-pills-os" role="tabpanel" aria-labelledby="v-pills-os-tab" tabindex="0">
                            <ul>
                                <li>Minimum: </li>
                                <li>Windows 7 32-bit</li>
                            </ul>    
                            <ul>
                                <li>Recommended:</li>
                                <li>Windows 7/8/10 64-bit</li>
                            </ul>                    
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Download2Element3