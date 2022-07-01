import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import gambarPertama from './../../assets/home2-section1.webp';
import gambarKedua from './../../assets/home2-section2.webp';


function Home2() {

    const gambarAsik = () => {

        const btnContainer = document.getElementById("button-row");
        const btns = btnContainer.getElementsByTagName("img");
        
        for (var i = 0; i < btns.length; i++) 
        {
            btns[i].addEventListener("click", function() 
            {
                // eslint-disable-next-line no-unused-expressions
                (document.querySelector('.menuActive')) ? document.querySelector('.menuActive').classList.remove('menuActive') : '';
                this.classList.add('menuActive');
            });
        } 
    }

    useEffect(() => {
      gambarAsik();
    }, [])
    
        
    return (
        <Container className="Home2 mt-2">
            <h1>
                <span style={{ color: "white" }}>In-Game</span>
                <span style={{ color: "#dd7c35" }}> Preview</span>
            </h1>
            <p>
            CrossFire Legacy is making its game more enjoyable for players. Integrated with a variety of old and new maps to make it easier for players to play and have fun.
            </p>
            <section id="button-row" className="mt-3">
                <img src={gambarPertama} height={500}/>
                <img src={gambarKedua} height={500}/>
            </section>

        </Container>
    )
}

export default Home2;