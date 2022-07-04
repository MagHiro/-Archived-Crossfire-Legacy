import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import ReactPaginate from "react-paginate";

function News2() {
    const [news, setNews] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        getNews();
    }, []);

    const getNews = async () => {
        await axios
            .get(`http://localhost:8000/api/index?page=1`)
            .then((response) => {
                setPageCount(
                    Math.ceil(response.data.total / response.data.per_page)
                );
                setNews(response.data.data);
            });
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        await axios
            .get(`http://localhost:8000/api/index?page=${currentPage}`)
            .then((response) => {
                setNews(response.data.data);
            });
    };

    const getDate = (date) => {
        return date.split("T")[0];
    };

    return (
        <Container className="News2">
            {news.map((news) => (
                <Card key={news.id}>
                    <img
                        src={"http://localhost:8000/uploads/" + news.image_name}
                    />
                    <section>
                        <h2>
                            <a href={"news/" + news.id}>{news.judul}</a>
                        </h2>
                        <p dangerouslySetInnerHTML={{__html: news.berita}}></p>
                        <span>{getDate(Date(news.created_at))}</span>
                    </section>
                </Card>
            ))}

            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </Container>
    );
}

export default News2;
