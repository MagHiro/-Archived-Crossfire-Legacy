import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from './Spinnner';

const Home = React.lazy(() => import("./pages/Home"));
const News = React.lazy(() => import("./pages/News"));
const Download = React.lazy(() => import("./pages/Download"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const TNC = React.lazy(() => import("./pages/TNC"));
const Register = React.lazy(() => import("./pages/Register"));
const Login = React.lazy(() => import("./pages/Login"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const NewsIndex = React.lazy(() => import("./pages/NewsElement/NewsIndex"));
const Recharge = React.lazy(() => import("./pages/Recharge"));
const Navbar = React.lazy(() => import("./Navigasibar"));
const Footer = React.lazy(() => import("./Footer"));

function MyApp() {
    return (
        <div className="pageBG">
            <React.Suspense
                fallback={
                    <Spinner />
                }
            >
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/News/:id" element={<NewsIndex />} />
                        <Route path="/download" element={<Download />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/term-condition" element={<TNC />} />
                        <Route path="/signin" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/dashboard/profile" element={<Dashboard />} />
                        <Route path="/dashboard/topup" element={<Recharge />} />
                    </Routes>

                    <Footer />  
            </React.Suspense>
        </div>
    );
}

export default MyApp;

if (document.getElementById("app")) {
    ReactDOM.render(
        <BrowserRouter>
            <MyApp />
        </BrowserRouter>,
        document.getElementById("app")
    );
}
