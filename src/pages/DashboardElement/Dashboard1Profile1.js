import React from "react";
import { Card, Toast, ToastContainer } from "react-bootstrap";
import { useState, useEffect } from "react";
import Cookies from "./../../Cookies";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Auth from "./../../Auth";

export default function Dashboard1Profile1() {
  const { http } = Auth();
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState("");
  const [isLoading, setLoading] = useState(false);
  const token = Cookies.getItem("token");

  const fetchData = async () => {
    setLoading(true);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await http.post("/me").then((response) => {
      setUser(response.data);
      setLoading(false);
    });
  };

  const verifyData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await http.post("/email/verify/resend").then((response) => {
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
      {!isLoading ? (
        <Card>
          <div>
            <label className="form-label">Nama</label>
            <input
              type="text"
              className="form-control"
              value={name || <Skeleton />}
              disabled
              readOnly
            />
          </div>
          <div>
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={user.username || <Skeleton />}
              disabled
              readOnly
            />
          </div>
          <div>
            <label className="form-label">Email Addres</label>
            <input
              type="text"
              className="form-control"
              value={user.email || <Skeleton />}
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
      ) : (
        <SkeletonTheme baseColor="#d37c35" highlightColor="#444">
          <p>
            <Skeleton count={5} />
          </p>
        </SkeletonTheme>
      )}

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
