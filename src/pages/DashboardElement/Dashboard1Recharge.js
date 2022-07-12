import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Card, Form, Button, Tabs, Tab, Table } from "react-bootstrap";
import Cookies from "./../../Cookies";
import Auth from "./../../Auth";

function Dashboard1Recharge() {
  const [user, setUser] = useState({});
  const {http} = Auth();

  // API Requst Fetch Data Player
  const token = Cookies.getItem("token");
  const fetchData = async () => {
    await http.get("/user").then((response) => {
      setUser(response.data);
    });
  };

  // API Request SnapToken ke BackEnd
  var [snaptoken, setSnaptoken] = useState("0");
  const [id, setID] = useState("");
  const generateToken = async (e) => {
    await http
      .post("/payment", { product_id: id, username:user.username })
      .then((response) => {
        setSnaptoken(response.data.snap_token);
      });
  };

  // API Sending Order Data to Database
  const orderPlaced = async (data) => {
    await http
      .post(`/payment_post`, data)
      .then((response) => {
        console.log(response);
      });
  };

  // API Request Fetching Data Top Up - List
  const [topup, setTopup] = useState([]);
  const fetchTopup = async () => {
    await http.get("/topup_list").then((response) => {
      setTopup(response.data.topup);
    });
  };

  // Api Requst Fetching Payment History
  const [payment, setPayment] = useState([]);
  const paymentHistory = async () => {
    await http.get("/payment_history").then((response)=> {
      setPayment(response.data)
    })
  } 

  const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  };
  
  const formatDate = (date) => {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  };

  // Masukin Snap.js ke Script Tag
  const insertScript = () => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-GZ1cyjNsmVytu2vg";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  };

  // API Request Snap.js Showing POP UP PAYMENT
  const Payment = async () => {
    // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
    window.snap.pay(`${snaptoken}`, {
      onSuccess: function (result) {
        /* You may add your own implementation here */
        alert("payment success!");
        orderPlaced(JSON.stringify(result));
      },
      onPending: function (result) {
        /* You may add your own implementation here */
        orderPlaced(JSON.stringify(result));
      },
      onError: function (result) {
        /* You may add your own implementation here */
        alert("payment failed!");
        orderPlaced(JSON.stringify(result));
      },
      onClose: function () {
        /* You may add your own implementation here */
        alert("you closed the popup without finishing the payment");
      },
    });
  };

  // Loading Animation Waiting for API Request
  const [isLoading, setLoading] = useState(false);
  const handleClick = () => setLoading(true);
  useEffect(() => {
    if (isLoading) {
      generateToken().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  // Mounting Fungsi Script Tag, dan Data Player
  useEffect(() => {
    fetchData();
    fetchTopup();
    insertScript();
    paymentHistory();
  }, []);

  return (
    <div className="col Dashboard1Recharge">
      <h4>&#8883; Dashboard</h4>
      <div className="informasi-dashboard">
        <p>
          Welcome to <span>Account Crossfire Legacy!</span>
          <br />
          Kamu Bisa Melakukan Top Up Di Sini.
        </p>
      </div>
      <div className="profile-info">
        <Tabs defaultActiveKey="payment" id="uncontrolled-tab-example">
          <Tab eventKey="recharge" title="Recharge">
            <Card>
              <section className="row">
                <Col>
                  <h2>
                    Price <span style={{ color: "white" }}>Recharge</span>
                  </h2>

                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setID(e.target.value)}
                  >
                    <option>Pilih Menu Top Up </option>
                    {topup.map((topup) => (
                      <option key={topup.id} value={topup.id}>
                        {topup.name}
                      </option>
                    ))}
                  </Form.Select>
                  <Button
                    onClick={!isLoading ? handleClick : null}
                    variant="outline-light"
                  >
                    {isLoading ? "Loading…" : "Confirm Cash"}
                  </Button>
                </Col>
                <Col>
                  <div className="form">
                    <div className="entry_email">
                      <p>
                        Kepada <b>{user.username}</b>, Terimakasih
                        atas pembelian anda. Bukti pembayaran akan dikirimkan
                        hanya kepada Troopers yang sudah memverifikasi email.
                      </p>
                      {snaptoken == 0 ? (
                        <Button
                          onClick={Payment}
                          id="pay-button"
                          variant="outline-light"
                          disabled
                        >
                          Waiting for Ammount
                        </Button>
                      ) : (
                        <Button
                          onClick={Payment}
                          id="pay-button"
                          variant="outline-light"
                        >
                          PAY NOW
                        </Button>
                      )}
                    </div>
                  </div>
                </Col>
              </section>
            </Card>
          </Tab>
          <Tab eventKey="payment" title="Payment History">
            <Card>
              <Table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Payment ID</th>
                    <th>Payment Order</th>
                    <th>Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                {payment.map((payment, index) => (
                      <tr key={payment.id}>
                      <td>{index + 1}</td>
                      <td>{formatDate(new Date(payment.created_at))}</td>
                      <td>{payment.order_id}</td>
                      <td>{payment.product_id}</td>
                      <td>{payment.status}</td>
                    </tr>
                    ))}  
                </tbody>
              </Table>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Dashboard1Recharge;
