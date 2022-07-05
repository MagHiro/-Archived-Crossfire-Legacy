import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import newsfoto from "./../assets/news-header.webp";
import axios from "axios";
import Cookies from "./../Cookies";

function Verification() {
  const token = Cookies.getItem("token");
  const navigate = useNavigate();

  const logoutHandler = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.post("http://localhost:8000/api/logout").then(() => {
      Cookies.removeItem("token");
      navigate(0);
    });
  };

  useEffect(() => {
    if (Cookies.getItem("token")) {
        logoutHandler();
    }
  }, [])
  

  return (
    <>
      <Parallax
        className="Verification"
        blur={4}
        bgImage={newsfoto}
        bgImageStyle={{ opacity: ".5" }}
        strength={0}
      >
        <h1>Success Page</h1>
      </Parallax>
      <Container fluid className="Verification">
        <Card>
          <section>
            <h4>User Page</h4>
            <p>Your Email Has Been Verified Please Login Again</p>
          </section>
        </Card>
      </Container>
    </>
  );
}

export default Verification;
