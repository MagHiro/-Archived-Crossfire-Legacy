import React from 'react';
import { Parallax } from 'react-parallax';
import FirstParallax from "./../../assets/FirstParallax.webp";
import { Container, Button } from 'react-bootstrap';

function Home1() {
    return (
        <Parallax
            blur={4}
            bgImage={FirstParallax}
            bgImageStyle={{ opacity: ".5" }}
            strength={0}
        >
            <Container fluid className="Home1">
                    <h1>
                        <span style={{ color: "white" }}>Forget you're</span>
                        <span style={{ color: "#dd7c35" }}>somewhere else</span>
                    </h1>

                    <p>
                        CrossFire Legacy will giving you a pleasure you’ll
                        actually love, in fastest way, no DDOS, no VPN. Connect
                        to people, games, or relation whenever you ready,
                        whenever you want. Accomplish thousand of journey you
                        will face off.
                    </p>

                    <Button href="/download" variant="outline-light">
                        PLAY NOW
                    </Button>
            </Container>
        </Parallax>
    );
}

export default Home1;
