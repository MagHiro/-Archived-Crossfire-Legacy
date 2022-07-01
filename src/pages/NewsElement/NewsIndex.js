import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import News1 from "./News1"
import {Helmet} from "react-helmet";

function NewsIndex() {
    const [judul, setJudul] = useState('');
    const [berita, setBerita] = useState('');
    const [image_name, setImage_name] = useState('');
    const [tanggal, setTanggal] = useState('');
    const { id } = useParams();

    useEffect(() => {
        getNews();
    }, []);

    const getNews = async () => {
        await axios
            .get(`https://crossfireapi.herokuapp.com/api/News/${id}`)
            .then((response) => {
                setJudul(response.data.posts.judul);
                setBerita(response.data.posts.berita);
                setImage_name(response.data.posts.image_name);
                setTanggal(response.data.posts.created_at);
            });
    };

    const getDate = (date) => {
        return date.split("T")[0];
    };

    return (
        <>
            <Helmet>
                <title>CFL | {judul}</title>
            </Helmet>
            <News1 />
            <Container className="NewsIndex">
                <Card>
                <h1>{judul}</h1>
                    <img src={ "https://crossfireapi.herokuapp.com/uploads/" + image_name } />
                    <section>
                        <article dangerouslySetInnerHTML={{__html: berita}}></article>
                        <span>{getDate(Date(tanggal))}</span>
                    </section>
                </Card>
            </Container>
        </>
    );
}

export default NewsIndex;
