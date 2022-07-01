import React from "react";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import Cookies from "./../../Cookies";
import axios from "axios";

export default function Dashboard1Profile1() {
    const [user, setUser] = useState({});
    const token = Cookies.getItem("token");

    const fetchData = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await axios.get("https://crossfireapi.herokuapp.com/api/user").then((response) => {
            setUser(response.data);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const name = `${user.firstname} ${user.lastname}` 

    return (
    <div className="Dashboard1Profile1">
        <Card>
            <div>
                <label className="form-label">Nama</label>
                <input
                    type="text"
                    className="form-control"
                    value={name || ""}
                    disabled
                    readOnly
                />
            </div>
            <div>
                <label className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control"
                    value={user.username || ""}
                    disabled
                    readOnly
                />
            </div>
            <div>
                <label className="form-label">Email Addres</label>
                <input
                    type="text"
                    className="form-control"
                    value={user.email || ""}
                    disabled
                    readOnly
                />
            </div>
            <div>
                <label className="form-label">Discord ID</label>
                <input
                    type="text"
                    className="form-control"
                    value=""
                    disabled
                    readOnly
                />
            </div>
            <button type="button" className="btn btn-outline-primary">
                Verify Account
            </button>   
        </Card>
    </div>        
    );
}
