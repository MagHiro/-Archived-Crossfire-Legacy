import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

function Home4() {
    return (
        <Container className="Home4">
            <h1>
                <span style={{ color: "white" }}>Frequntly</span>
                <span style={{ color: "#dd7c35" }}> Asked Question</span>
            </h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        1. Apa itu Crossfire Legacy ?
                    </Accordion.Header>
                    <Accordion.Body>
                        Crossfire Legacy adalah crossfire private server
                        yang di kembangkan oleh developer dari Indonesia
                        dan bisa dimainkan tanpa menggunakan VPN di
                        Indonesia dan sekitarnya.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        2. Client Versi berapa yang digunakan di
                        Crossfire Legacy ?
                    </Accordion.Header>
                    <Accordion.Body>
                        Karena kerterbatasan jumlah Developer di
                        Crossfire Legacy, kami menggunakan Client Versi
                        2.0 untuk OBT yang akan datang dan kedepannya
                        nanti akan menggunakan Client Versi 3.0 setelah
                        game berjalan dengan normal.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        3. Kenapa Kalian harus Main Crossfire Legacy ?
                    </Accordion.Header>
                    <Accordion.Body>
                        Crossfire Legacy memfokuskan visinya untuk
                        memberikan kesan nostalgia ketika bermain
                        Crossfire di masa kejayaanya. Tim Developer
                        mencoba untuk membangun kembali momen-momen emas
                        yang bisa kalian rasakan kembali dengan
                        konten-konten original dari Crossfire Lyto
                        layaknya seperti zaman dahulu. Kepuasan kalian
                        sebagai player menjadi prioritas kami dalam
                        pengembangkan game ini!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        4. Dimana Saya Bisa Mendownload Game Crossfire
                        Legacy Crossfire Legacy ?
                    </Accordion.Header>
                    <Accordion.Body>
                        Crossfire Legacy bisa kalian download langsung
                        di <a href="#">https://cflegacy.net/download</a>{" "}
                        dan kalian bisa pilih beberapa opsi yang
                        tertampil terkait perangkat yang kalian ingin
                        gunakan Ketika bermain Crossfire.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        5. Apakah Crossfire Legacy Mempunyai Discord
                        Server ?
                    </Accordion.Header>
                    <Accordion.Body>
                        Tentu saja! Crossfire Legacy memiliki Server
                        Discord publik untuk seluruh player. Komunitas
                        CFL bisa berkomunikasi dan mengobrol dengan satu
                        sama lainnya. Server Discord Crossfire Legacy
                        juga menjadi salah satu tempat para player bisa
                        berkomunikasi langsung dengan Moderator ataupun
                        Developer jikalau ada pertanyaan atau bantuan
                        yang ingin disampaikan. Kalian bisa langsung ke
                        Server Discord Crossfire Legacy melalui link
                        berikut{" "}
                        <a href="#"> https://discord.gg/cflegacy.</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        6. Bagaimana Cara Membeli Koin / Top Up Digame
                        Crossfire Legacy ?
                    </Accordion.Header>
                    <Accordion.Body>
                        Crossfire Legacy menyediakan layanan Top Up
                        menggunakan Payment Gateway yang terenskripsi
                        dan kalian bisa langsung membuka{" "}
                        <a href="#">https://cflegacy.net/topup</a>{" "}
                        setelah kalian login atau melalui menu dashboard
                        akun.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default Home4;