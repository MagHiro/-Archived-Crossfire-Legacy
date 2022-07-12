import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import gambarPertama from "./../../assets/home2-section1.webp";
import gambarKedua from "./../../assets/home2-section2.webp";

function Home2() {
  const gambarAsik = () => {
    const btnContainer = document.getElementById("button-row");
    const btns = btnContainer.getElementsByTagName("img");

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        // eslint-disable-next-line no-unused-expressions
        document.querySelector(".menuActive")
          ? document.querySelector(".menuActive").classList.remove("menuActive")
          : "";
        this.classList.add("menuActive");
      });
    }
  };

  useEffect(() => {
    gambarAsik();
  }, []);

  return (
    <Container className="Home2 mt-2">
      <section>
        <h1>
          <span style={{ color: "white" }}>Game</span>
          <span style={{ color: "#dd7c35" }}> Interface</span>
        </h1>
        <p>
          <i>
            <b>CrossFire Legacy</b>{" "}
          </i>
          is making its game more enjoyable for players. Integrated with a
          variety of old and new maps to make it easier for players to play and
          have fun.
        </p>
      </section>
      <sidebar id="button-row">
        <img src={gambarPertama} />
        <img src={gambarKedua} />
        <img src={gambarPertama} />
        <img src={gambarKedua} />
      </sidebar>
    </Container>
  );
}

export default Home2;
