import { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import RegisterParallax from "./../../assets/Register-Parallax.jpg";
import axios from "axios";
import Cookies from "./../../Cookies";

export default function Login1() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [Msg, SetMsg] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        //check token
        if (Cookies.getItem("token")) {
            //redirect page dashboard
            navigate("/dashboard");
        }
    }, []);

    const submitForm = async (e) => {
        e.preventDefault();
        // api call
        try {
            await axios
                .post("https://crossfireapi.herokuapp.com/api/login", { username: username, password: password })
                .then((response) => {
                    Cookies.setItem("token", response.data.token);
                    navigate("/dashboard");
                    navigate(0);
                });
        } catch (error) {
            (error.response.data);
            SetMsg(error.response.data);
        }
    };

    return (
        <Parallax className="Login1" blur={4} bgStyle ={{height : '100vh'}}bgImage={RegisterParallax} bgImageStyle={{ opacity: ".5" }}>
            <Card>
                <h1 className="text-center mb-3">LOGIN PAGE</h1>
                <form className="row justify-content-center mb-1" noValidate>
                    <div className="col">
                        <div className="form-floating mb-1">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Username</label>
                            <span>{Msg.username}</span>
                        </div>
                    </div>
                </form>
                
                <form className="row justify-content-center mb-1">
                    <div className="col">
                        <div className="form-floating mb-1">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingUsername"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="floatingUsername">Password</label>
                            <span>{Msg.password}</span>
                        </div>
                    </div>
                </form>

                <section className="col mb-1 ">
                    <p>Do not have an account ? <a href="/register">Sign here</a></p>
                    <span>{Msg.message}</span>
                    <button onClick={submitForm} className="btn btn-primary">Login</button>
                </section>
            </Card>
        </Parallax>
    );
}
