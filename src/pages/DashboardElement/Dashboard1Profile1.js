import React from "react";
import { Card, Toast, ToastContainer } from "react-bootstrap";
import { useState, useEffect } from "react";
import Cookies from "./../../Cookies";
import axios from "axios";

export default function Dashboard1Profile1() {
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState("");
  const token = Cookies.getItem("token");

  const fetchData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.get("http://localhost:8000/api/user").then((response) => {
      setUser(response.data);
    });
  };

  const verifyData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .post("http://localhost:8000/api/email/verify/resend")
      .then((response) => {
        setAlert(response.data.messages);
      });
    setShow(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const name = `${user.firstname} ${user.lastname}`;

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
        {!user.email_verified_at == "" ? (
          <p>Your Email Has Been Verified </p>
        ) : (
          <button
            type="button"
            onClick={verifyData}
            className="btn btn-outline-primary"
          >
            Verify Account
          </button>
        )}
      </Card>

      <ToastContainer position="middle-end">
        <Toast show={show} onClose={() => setShow(false)}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{name}</strong>
            <small>3 sec ago</small>
          </Toast.Header>
          <Toast.Body>{alert}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
