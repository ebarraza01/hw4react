import React from 'react';
import {Col, Row} from "react-bootstrap";
import CList from "./cList";
import useFetch from "./useFetch";
import PList from "./pList";

function Products(props) {
    let url =  "http://localhost:8000/products"
    const {data: products, isPending, error} = useFetch(url)
    return (
        <body className="container mt-5">
            <Row className={"bg-warning"}>
                <Col sm={3}>
                </Col>
                <Col sm={3}>
                    { error && <div> Error: {error} </div> }
                    {isPending && <div> Loading ...</div>}
                    { products && <PList products={products}/>}
                </Col>
            </Row>

        </body>
    );
}

export default Products;