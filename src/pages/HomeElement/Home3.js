import React, { useState, useEffect } from "react";
import { Container, Carousel, Card } from "react-bootstrap";
import fototest from "./../../assets/BannerCrossfire1.jpg";
import discordlogo from "./../../assets/ds-logo.png";

function Home3() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 767 );

    const updateMedia = () => {
        setDesktop(window.innerWidth > 767);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    return (
        <Container className="Home3">
            {isDesktop ? (
                <>
                    <h1>
                        <span style={{ color: "white" }}>Who's</span>
                        <span style={{ color: "#dd7c35" }}> Behind us</span>
                    </h1>
                    <p>
                    Crossfire Legacy is managed and maintained by a couple of fellows who have dedicated their lives to supporting the community.
                    </p>
                    <Carousel>
                        <Carousel.Item>
                        <div className="ownerCFL">    
                            <Card>
                                <img
                                    variant="top"
                                    src={fototest}
                                    height="200"
                                />
                                <section>
                                        <h4>balzpro [OWNER]</h4>
                                        <a href="#">
                                            <img
                                                src={discordlogo}
                                                width="40"
                                                height="40"
                                            />
                                        </a>
                                </section>
                            </Card>
                            <Card>
                                <img
                                    variant="top"
                                    src={fototest}
                                    height="200"
                                />
                                <section>
                                        <h4>Amajanti [AM DEV]</h4>
                                        <a href="#">
                                            <img
                                                src={discordlogo}
                                                width="40"
                                                height="40"
                                            />
                                        </a>
                                </section>
                            </Card>
                        </div>    
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="ownerCFL">   
                            <Card>
                                <img
                                    variant="top"
                                    src={fototest}
                                    height="200"
                                />
                                <section>
                                        <h4>NickzJSA [Game Master]</h4>
                                        <a href="#">
                                            <img
                                                src={discordlogo}
                                                width="40"
                                                height="40"
                                            />
                                        </a>
                                </section>
                            </Card>
                            <Card>
                                <img
                                    variant="top"
                                    src={fototest}
                                    height="200"
                                />
                                <section>
                                        <h4>Amajanti [AM DEV]</h4>
                                        <a href="#">
                                            <img
                                                src={discordlogo}
                                                width="40"
                                                height="40"
                                            />
                                        </a>
                                </section>
                            </Card>
                        </div>    
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="ownerCFL">   
                            <Card>
                                <img
                                    variant="top"
                                    src={fototest}
                                    height="200"
                                />
                                <section>
                                        <h4>Deph [Moderator / Staff]</h4>
                                        <a href="#">
                                            <img
                                                src={discordlogo}
                                                width="40"
                                                height="40"
                                            />
                                        </a>
                                </section>
                            </Card>
                            <Card>
                                <img
                                    variant="top"
                                    src={fototest}
                                    height="200"
                                />
                                <section>
                                        <h4>Zippe [Co-Owner / Staff]</h4>
                                        <a href="#">
                                            <img
                                                src={discordlogo}
                                                width="40"
                                                height="40"
                                            />
                                        </a>
                                </section>
                            </Card>
                        </div>    
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="ownerCFL">       
                            <Card>
                                <img
                                    variant="top"
                                    src={fototest}
                                    height="200"
                                />
                                <section>
                                        <h4>@sugardaddy [Admin / Staff]</h4>
                                        <a href="#">
                                            <img
                                                src={discordlogo}
                                                width="40"
                                                height="40"
                                            />
                                        </a>
                                </section>
                            </Card>
                            <Card>
                                <img
                                    variant="top"
                                    src={fototest}
                                    height="200"
                                />
                                <section>
                                        <h4>Ammar [Community Assistant]</h4>
                                        <a href="#">
                                            <img
                                                src={discordlogo}
                                                width="40"
                                                height="40"
                                            />
                                        </a>
                                </section>
                            </Card>
                        </div>    
                        </Carousel.Item>
                    </Carousel>
                </>
            ) : (
                <>
                <h1>
                    <span style={{ color: "white" }}>Who's</span>
                    <span style={{ color: "#dd7c35" }}> Behind us</span>
                </h1>
                <p>
                    Crossfire Legacy is managed and maintained by a couple of fellows who have dedicated their lives to supporting the community.
                </p>
                <Carousel>
                    <Carousel.Item>
                        <Card>
                            <img
                                variant="top"
                                src={fototest}
                                height="200"
                            />
                            <section>
                                    <h4>balzpro [OWNER]</h4>
                                    <a href="#">
                                        <img
                                            src={discordlogo}
                                            width="40"
                                            height="40"
                                        />
                                    </a>
                            </section>
                        </Card> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <img
                                variant="top"
                                src={fototest}
                                height="200"
                            />
                            <section>
                                    <h4>Amajanti [AM DEV]</h4>
                                    <a href="#">
                                        <img
                                            src={discordlogo}
                                            width="40"
                                            height="40"
                                        />
                                    </a>
                            </section>
                        </Card> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <img
                                variant="top"
                                src={fototest}
                                height="200"
                            />
                            <section>
                                    <h4>NickzJSA [Game Master]</h4>
                                    <a href="#">
                                        <img
                                            src={discordlogo}
                                            width="40"
                                            height="40"
                                        />
                                    </a>
                            </section>
                        </Card> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <img
                                variant="top"
                                src={fototest}
                                height="200"
                            />
                            <section>
                                    <h4>@sugardaddy [Admin / Staff]</h4>
                                    <a href="#">
                                        <img
                                            src={discordlogo}
                                            width="40"
                                            height="40"
                                        />
                                    </a>
                            </section>
                        </Card> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <img
                                variant="top"
                                src={fototest}
                                height="200"
                            />
                            <section>
                                    <h4>Zippe [Co Owner / Staff]</h4>
                                    <a href="#">
                                        <img
                                            src={discordlogo}
                                            width="40"
                                            height="40"
                                        />
                                    </a>
                            </section>
                        </Card> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <img
                                variant="top"
                                src={fototest}
                                height="200"
                            />
                            <section>
                                    <h4>Ammar [Community Assitant]</h4>
                                    <a href="#">
                                        <img
                                            src={discordlogo}
                                            width="40"
                                            height="40"
                                        />
                                    </a>
                            </section>
                        </Card> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <img
                                variant="top"
                                src={fototest}
                                height="200"
                            />
                            <section>
                                    <h4>Deph [Staff / Admin]</h4>
                                    <a href="#">
                                        <img
                                            src={discordlogo}
                                            width="40"
                                            height="40"
                                        />
                                    </a>
                            </section>
                        </Card> 
                    </Carousel.Item>
                </Carousel>
                </>    
            )}
        </Container>
    );
}

export default Home3;
