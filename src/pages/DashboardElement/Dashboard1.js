import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import { useNavigate } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import Cookies from "./../../Cookies";
import Foto from './../../assets/cfbrss-02.jpg';
import Foto1 from './../../assets/cfl2.gif';
import Dashboard1Profile from "./Dashboard1Profile";
import Dashboard1Character from "./Dashboard1Character";
import Dashboard1Recharge from "./Dashboard1Recharge";
import axios from "axios";

function Dashboard1() {

    const [user, setUser] = useState({});
    const token = Cookies.getItem("token");
    const navigate = useNavigate();

    const fetchData = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await axios.get("https://crossfireapi.herokuapp.com/api/user").then((response) => {
            setUser(response.data);
        });
    };

    useEffect(() => {
        fetchData();
        if (!Cookies.getItem("token")) {
            navigate("/signin");
        };
    }, []);

    const getDate = (date) => {
        return date.split("T")[0];
    };

    const padTo2Digits = (num) => {
        return num.toString().padStart(2, '0');
    };
      
    const formatDate = (date) => {
        return [
          padTo2Digits(date.getDate()),
          padTo2Digits(date.getMonth() + 1),
          date.getFullYear(),
        ].join('/');
    };

    const logoutHandler = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await axios.post("https://crossfireapi.herokuapp.com/api/logout").then(() => {
            Cookies.removeItem("token");
            navigate("/");
        });
    };

    return (
        <Parallax
            blur={4}
            bgImage={Foto}
            bgImageStyle={{ opacity: ".5" }}
        >
            <Container className="Dashboard1">
                    <div className="nav nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Card>
                                <img src={Foto1} width={100} height={100} />
                                <h3>{user.nickname || ''} ID {user.id || ''}</h3>
                                <button type="button" className="btn btn-outline-primary">PLAYER</button>
                                <span>Player Since {formatDate(new Date(user.created_at))}</span>
                        </Card>
                        <button className="nav-link active" id="v-pills-Profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Profile" type="button" role="tab" aria-controls="v-pills-Profile" aria-selected="true">Profile</button>
                        <button className="nav-link" id="v-pills-Character-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Character" type="button" role="tab" aria-controls="v-pills-Character" aria-selected="false">Character</button>
                        <button className="nav-link" id="v-pills-Recharge-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Recharge" type="button" role="tab" aria-controls="v-pills-Recharge" aria-selected="false" disabled>Recharge</button>
                        <button className="nav-link" type="submit" onClick={logoutHandler} aria-selected="false">Logout</button>
                    </div>

                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-Profile" role="tabpanel" aria-labelledby="v-pills-Profile-tab" tabIndex="0"><Dashboard1Profile /></div>
                        <div className="tab-pane fade" id="v-pills-Character" role="tabpanel" aria-labelledby="v-pills-Character-tab" tabIndex="0"><Dashboard1Character /></div>
                        <div className="tab-pane fade" id="v-pills-Recharge" role="tabpanel" aria-labelledby="v-pills-Recharge-tab" tabIndex="0"><Dashboard1Recharge /></div>
                    </div> 
            </Container>
        </Parallax>
    )
}

export default Dashboard1;