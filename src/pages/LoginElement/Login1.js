import { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import RegisterParallax from "./../../assets/Register-Parallax.jpg";
import axios from "axios";
import Cookies from "./../../Cookies";
import Swal from 'sweetalert2';
import { Spinner } from "react-bootstrap";
import Auth from "./../../Auth";

export default function Login1() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [Msg, SetMsg] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (Cookies.getItem("token")) {
            navigate("/dashboard");
        };
    }, []);

    const { http } = Auth();
    const [isLoading, setLoading] = useState(false);
    const submitForm = async (e) => {
        e.preventDefault();
        try {   
            setLoading(true)
            await http
                .post("/login", { username: username, password: password })
                .then((response) => {
                    setLoading(false)
                    Cookies.setItem("token", response.data.access_token)
                    navigate("/dashboard")
                    navigate(0)
                });
        } catch (error) {
            setLoading(false)
            SetMsg(error.response.data);
            Swal.fire(
                'Error',
                `${error.response.data.message}`,
            )
        }
    };

    return (
        <Parallax className="Login1" blur={4} bgImage={RegisterParallax} bgImageStyle={{ opacity: ".5"}} strength={4}>
            <Card>
                <form>
                    <h1 className="text-center mb-3">LOGIN PAGE</h1>
                    <div className="row justify-content-center mb-1" noValidate>
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
                    </div>
                    
                    <div className="row justify-content-center mb-1">
                        <div className="col">
                            <div className="form-floating mb-1">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                                <span>{Msg.password}</span>
                            </div>
                        </div>
                    </div>

                    <section className="col mb-1 ">
                        <p>Do not have an account ? <a href="/register">Sign Up</a></p>
                        <button onClick={submitForm} type="submit" className="btn btn-primary">{isLoading ? <Spinner animation="border" />: "Login"}</button>

                    </section>
                </form>
            </Card>
        </Parallax>
    );
}
