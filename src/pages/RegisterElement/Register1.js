import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-parallax";
import RegisterParallax from "./../../assets/Register-Parallax.jpg";
import axios from "axios";
import Cookies from "./../../Cookies";

export default function Register1() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [pin, setPin] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [Msg, SetMsg] = useState("");

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
            await axios.post("http://localhost:8000/api/register", {
                email: email,
                password: password,
                password_confirmation: password_confirmation,
                pin: pin,
                username: username,
                firstname: firstname,
                lastname: lastname,
            });
            navigate("/signin");
        } catch (error) {
            if (error.response) {
                SetMsg(error.response.data);
            }
        }
    };

    return (
        <Parallax className="Register1" blur={4} bgImage={RegisterParallax} bgImageStyle={{ opacity: ".5" }}>
            <Card>
                <h1 className="text-center mb-3">REGISTER PAGE</h1>
                <form className="row justify-content-center mb-1" noValidate>
                    <div className="col">
                        <div className="form-floating mb-1">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="First name"
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                            <label htmlFor="floatingInput">First name</label>
                            <span>{Msg.firstname}</span>
                        </div>
                    </div>
                    <div className="col">    
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingLastname"
                                placeholder="Last name"
                                onChange={(e) => setLastname(e.target.value)}
                            />
                            <label htmlFor="floatingLastname">Last name</label>
                            <span>{Msg.lastname}</span>
                        </div>
                    </div>
                </form>
                
                <form className="row justify-content-center mb-1">
                    <div className="col-sm-6 Regis-Tab">
                        <div className="form-floating mb-1">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingUsername"
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <label htmlFor="floatingUsername">Username</label>
                            <span>{Msg.username}</span>
                        </div>
                    </div>
                    <div className="col">   
                        <div className="form-floating">
                            <input
                                type="Email"
                                className="form-control"
                                id="floatingEmail"
                                placeholder="Email Address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="floatingEmail">Email Address</label>
                            <span>{Msg.email}</span>
                        </div>
                    </div>
                </form>
                
                <form className="row justify-content-center mb-1">
                    <div className="col-sm-6 Regis-Tab">
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
                    <div className="col">       
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingConfirm"
                                placeholder="Confirm"
                                onChange={(e) => setPassword_confirmation(e.target.value)}
                            />
                            <label htmlFor="floatingConfirm">Confirm</label>
                            <span>{Msg.password}</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating mb-1">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPin"
                                placeholder="Pin"
                                onChange={(e) => setPin(e.target.value)}
                            />
                            <label htmlFor="floatingPin">Pin</label>
                            <span>{Msg.pin}</span>
                        </div>
                    </div>
                </form>
                <section className="mb-1 ">
                    <p>Already have an account ? <a href="/signin">Sign here</a></p>
                    <button onClick={submitForm} className="btn btn-primary">Register</button>
                </section>
            </Card>
        </Parallax>
    );
}
