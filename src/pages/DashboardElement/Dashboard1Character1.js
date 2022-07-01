import React from "react";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import Cookies from "./../../Cookies";
import axios from "axios";

export default function Dashboard1Character1() {
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
    <div className="Dashboard1Character1">
        <Card>
            <table class="table karakter-info">
                <tbody>
                    <tr>
                    <th scope="row">Rank</th>
                    <td><img src={require('./../../assets/ranks/rank_104.jpg').default} width={30} height={30} /> Grand Marshall</td>
                    </tr>
                    <tr>
                    <th scope="row">Exp</th>
                    <td>{user.exp}</td>
                    </tr>
                    <tr>
                    <th scope="row">Rasio W/L</th>
                    <td>{user.win} / {user.lose}</td>
                    </tr>
                    <tr>
                    <th scope="row">Rasio K/D</th>
                    <td>{user.kill} / {user.death}</td>
                    </tr>
                    <tr>
                    <th scope="row">Game Point</th>
                    <td>{user.point} GP</td>
                    </tr>
                    <tr>
                    <th scope="row">Koin</th>
                    <td>{user.cash} Koin </td>
                    </tr>
                </tbody>
            </table>
            <button type="button" onClick={fetchData}className="btn btn-outline-primary">Refresh Data</button>
        </Card>
    </div>        
    );
}
