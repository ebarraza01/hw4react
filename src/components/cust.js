import React from 'react';
import useFetch from "./useFetch";
import {Col, Row} from "react-bootstrap";
import CList from "./cList";


function Cust(props) {
    let url = "http://localhost:8000/cust"
    const {data: cust, isPending, error} = useFetch(url)
    return (
        <body className="container mt-5">
            <Row className={"bg-warning"}>
                <Col sm={3}>
                </Col>
                <Col sm={3}>
                    {error && <div> Error: {error} </div>}
                    {isPending && <div> Loading ...</div>}
                    {cust && <CList cust={cust}/>}
                </Col>
            </Row>
        </body>
    );
}

export default Cust;