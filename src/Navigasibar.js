import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import "./styled/landingpage.css";
import Logo from "./assets/nav-logo.png";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Auth from "./Auth";
import Cookies from "./Cookies";

const { http } = Auth();

function Navigasibar() {
  const navigate = useNavigate();
  const text = "Halo, ";
  const [user, setUser] = useState({});

  //token
  const token = Cookies.getItem("token");

  //function "fetchData"
  const fetchData = async () => {
    try {
      await http.post("/me").then((response) => {
        setUser(response.data);
      });
    } catch (error) {
      console.clear()
    }
      

  };
  useEffect(() => {
      fetchData();   
  }, []);

  //function logout
  const logoutHanlder = async () => {
    await http.post("/logout").then(() => {
    });
    Cookies.removeItem("token");
    navigate("/");
  };

  return (
      <Navbar expand="lg">
          <Container fluid>
        <Navbar.Brand href="/">
          <img
            width="240"
            height="40"
            src={Logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/download">Download</Nav.Link>
            <Nav.Link href="/download" disabled>Shop</Nav.Link>
            <Nav.Link href="/download" disabled>Rank</Nav.Link>
          </Nav>

          <Nav className="ms-auto m-3 gap-3">
            {!Cookies.getItem("token") ? (
              <>
                <Button href="/register" variant="outline-secondary">
                  Sign Up
                </Button>
                <Button href="/signin" variant="primary">
                  Login
                </Button>
              </>
            ) : (
              <>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={text + user.firstname}
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="/dashboard">
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHanlder}>
                    LogOut
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
    </Container>
      </Navbar>
  );
}

export default Navigasibar;
