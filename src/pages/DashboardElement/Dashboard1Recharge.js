import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import { useNavigate } from 'react-router-dom';
import Cookies from "./../../Cookies";
import axios from "axios";

function Dashboard1Recharge() {
    const navigate = useNavigate();

    const [user, setUser] = useState({});

    //token
    const token = Cookies.getItem("token");

    //function "fetchData"
    const fetchData = async () => {
        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        //fetch user from Rest API
        await axios.get("http://127.0.0.1:8000/api/user").then((response) => {
            //set response user to state
            setUser(response.data);
        });
    };
    useEffect(() => {
        //call function "fetchData"
        fetchData();
    }, []);

    //function logout
    const logoutHandler = async () => {
        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        //fetch Rest API
        await axios.post("https://crossfireapi.herokuapp.com/api/logout").then(() => {
            //remove token from localStorage
            Cookies.removeItem("token");

            //redirect halaman login
            navigate("/signin");
        });
    };

    return (
        <div className="col dashboard-right">
            <h4>&#8883;  Dashboard</h4>
            <div className="informasi-dashboard">
                <p>Welcome to <span>Account Crossfire Legacy!</span><br />Kamu Bisa Melihat Keterangan Akun Mu Di Sini.</p>

            </div>
            <div className="profile-info">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">General</a>
                    </li>
                </ul>
                <div className="card profile-tab">
                    <div className="card-body">
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
                        <button type="button" onClick={fetchData} className="btn btn-outline-primary">Refresh Data</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard1Recharge;