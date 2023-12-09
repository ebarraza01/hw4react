import React from 'react';
import {Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function CList({cust}) {
    console.log(cust)

    return (
        <div>
            <Table table striped bordered border>
                <thead>
                <tr>
                    <th className={"border bg-info text-light"}> Customer</th>
                    <th className={"border bg-info text-light"}> Email</th>
                    <th className={"border bg-info text-light"}> Action 1</th>
                    <th className={"border bg-info text-light"}> Action 2</th>
                </tr>
                </thead>
                <tbody>
                {cust.map((cust) => (
                        <tr key={cust.CustomerID}>
                            <td> {cust.CustomerName}</td>
                            <td> {cust.CustomerEmail}</td>
                            <td>
                                <Button  href={`/updateCust/${cust.CustomerID}`}> Update {cust.CustomerID}</Button>
                            </td>
                            <td>
                                <Button to={`/deleteCust/${cust.CustomerID}`}> Delete {cust.CustomerID}</Button>
                            </td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
            <form method="get" action="/addCust">
                <button type="submit" className="ms-5 btn btn-secondary">
                    Insert New Customer
                </button>
            </form>
        </div>
    );
}

export default CList;