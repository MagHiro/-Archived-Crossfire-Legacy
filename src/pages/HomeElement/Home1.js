import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Home1() {
    return (
        <>
            <div className='Home1-bg'></div>
            <Container fluid className="Home1">
                    <h1>
                        <span style={{ color: "white" }}>Nostalgia never</span>
                        <span style={{ color: "#dd7c35" }}>Felt so good</span>
                    </h1>

                    <p>
                        <b>CrossFire Legacy</b> is crossfire private server developed by Indonesian community for community. Established upon numerous features, <b><i>No VPN, No DDOS</i></b>, Fastest possible server to play.
                    </p>

                    <Button href="/download" variant="outline-light">
                        PLAY NOW
                    </Button>
            </Container>
        </>
        
    );
}

export default Home1;
