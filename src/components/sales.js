import React from 'react';
import {Col, Row} from "react-bootstrap";
import SList from "./sList";
import useFetch from "./useFetch";

function Sales(props) {
    let url =  "http://localhost:8000/sales"
    const {data: sales, isPending, error} = useFetch(url)
    return (
        <body className="container mt-5 bg-warning">
            <Row>
                <Col sm={3}>
                </Col>
                <Col sm={3}>
                    { error && <div> Error: {error} </div> }
                    {isPending && <div> Loading ...</div>}
                    { sales && <SList sales={sales}/>}
                </Col>
                <form method="get" action="/home"><button className=" btn btn-secondary" type="submit">Return Home</button></form>
            </Row>

        </body>
    );
}

export default Sales;