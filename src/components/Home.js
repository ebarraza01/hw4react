import React from 'react';
import HomeCust from "./homeCust";
import HomeProduct from "./HomeProduct";
import HomeSales from "./HomeSales";
import {Col} from "react-bootstrap";
import useFetch from "./useFetch";

function Home(props) {
    let Custurl = "http://localhost:8000/custTop5"
    const {data: cust, isPending, error} = useFetch(Custurl)
    let Producturl = "http://localhost:8000/productsTop5"
    const {data: product, isPending2, error2} = useFetch(Producturl)
    let Salesurl = "http://localhost:8000/salesTop5"
    const {data: sales, isPending3, error3} = useFetch(Salesurl)
    return (
        <body className={"bg-warning"}>
            <div className="container-fluid mt-5 ms-5 bg-warning">
                <div className="row">
                    <div className="col">
                        <table>
                            <thead>
                            <tr>
                                <th>Top Customers</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <Col sm={3}>
                                    </Col>
                                    <Col sm={3}>
                                        {error && <div> Error: {error} </div>}
                                        {isPending && <div> Loading ...</div>}
                                        {cust && <HomeCust cust={cust}/>}
                                    </Col>
                                    <form method="get" action="/cust"><button className="me-5 btn btn-secondary" type="submit">See All</button></form>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <table>
                            <thead>
                            <tr>
                                <th>Top Products</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <Col sm={3}>
                                    </Col>
                                    <Col sm={3}>
                                        {error2 && <div> Error: {error} </div>}
                                        {isPending2 && <div> Loading ...</div>}
                                        {product && <HomeProduct product={product}/>}
                                    </Col>
                                    <form method="get" action="/products"><button className="me-5 btn btn-secondary" type="submit">See All</button></form>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <table>
                            <thead>
                            <tr>
                                <th>Top Months per Sales</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <Col sm={3}>
                                    </Col>
                                    <Col sm={3}>
                                        {error3 && <div> Error: {error} </div>}
                                        {isPending3 && <div> Loading ...</div>}
                                        {sales && <HomeSales sales={sales}/>}
                                    </Col>
                                    <form method="get" action="/sales"><button className="me-5 btn btn-secondary" type="submit">See All</button></form>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Home;