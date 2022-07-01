import React, { useState, useEffect } from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";
import "./styled/landingpage.css";

function Footer() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    return (
        <div className="footerBG">
            <Container>
                <div>
                    {isDesktop ? (
                        <div>
                            <Row>
                                <Col xs={4} className="mt-4 mb-4">
                                    <iframe
                                        className="visible-lg"
                                        src="https://discord.com/widget?id=924649291992150036&amp;theme=dark"
                                        height="250"
                                        allowtransparency="true"
                                        frameBorder="0"
                                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                                        style={{ width: "100%" }}
                                        bis_size='{"x":176,"y":4703,"w":400,"h":250,"abs_x":176,"abs_y":4703}'
                                    ></iframe>
                                </Col>
                                <Col className="mt-4 mb-4 md">
                                    <Nav className="footer-menu me-auto">
                                        <Nav.Link href="/">Homepage</Nav.Link>
                                        <Nav.Link href="#">Contact Us</Nav.Link>
                                        <Nav.Link href="/privacy">
                                            Privacy Policy
                                        </Nav.Link>
                                        <Nav.Link href="/term-condition">
                                            Term and Conditions
                                        </Nav.Link>
                                    </Nav>

                                    <div className="mt60">
                                        CrossFire Legacy is Private Server From
                                        Indonesia Maintained by The Community.
                                    </div>
                                    <div className="cff-status">
                                        {" "}
                                        <span>Server Status</span>{" "}
                                        <figure className="cff-status-indicator mt-2">
                                            {" "}
                                            <div></div>{" "}
                                        </figure>{" "}
                                        <figcaption
                                            id="serverStatusCaption"
                                            className="serverStatusCaption mt-1"
                                        >
                                            Offline
                                        </figcaption>{" "}
                                    </div>
                                </Col>
                            </Row>
                            <div className="footer-line"></div>
                            <Row className="footer-under">
                                <Col>© 2022</Col>
                                <Col style={{ textAlign: "right" }}>
                                    All rights belong to their respective owners
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col></Col>
                            </Row>
                        </div>
                    ) : (
                        <div>
                            <Row>
                                <Col className="mt-4 mb-4">
                                    <Nav className="footer-menu">
                                        <Nav.Link href="/">Homepage</Nav.Link>
                                        <Nav.Link href="#">Contact Us</Nav.Link>
                                        <Nav.Link href="/privacy">
                                            Privacy Policy
                                        </Nav.Link>
                                        <Nav.Link href="/term-condition">
                                            Term and Conditions
                                        </Nav.Link>
                                    </Nav>

                                    <div className="mt60">
                                        CrossFire Legacy is Private Server From
                                        Indonesia Maintained by The Community.
                                    </div>
                                    <div className="cff-status">
                                        {" "}
                                        <span>Server Status</span>{" "}
                                        <figure className="cff-status-indicator mt-2">
                                            {" "}
                                            <div></div>{" "}
                                        </figure>{" "}
                                        <figcaption
                                            id="serverStatusCaption"
                                            className="serverStatusCaption mt-1"
                                        >
                                            Offline
                                        </figcaption>{" "}
                                    </div>
                                    <iframe
                                        className="visible-lg"
                                        src="https://discord.com/widget?id=924649291992150036&amp;theme=dark"
                                        height="250"
                                        allowtransparency="true"
                                        frameBorder="0"
                                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                                        style={{ width: "100%" }}
                                        bis_size='{"x":176,"y":4703,"w":400,"h":250,"abs_x":176,"abs_y":4703}'
                                    ></iframe>
                                </Col>
                            </Row>
                            <div className="footer-line"></div>
                            <Row className="footer-under">
                                <Col>© 2022</Col>
                                <Col style={{ textAlign: "right" }}>
                                    All rights belong to their respective owners
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col></Col>
                            </Row>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default Footer;
