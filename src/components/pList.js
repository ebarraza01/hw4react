import React from 'react';
import {Button, Table} from "react-bootstrap";

function PList(products) {
            console.log(products)
            return (
            <div>
                <Table table striped bordered border>
                    <thead>
                    <tr>
                        <th className={"border bg-info text-light"}> Product</th>
                        <th className={"border bg-info text-light"}> Total Sales</th>
                        <th className={"border bg-info text-light"}> Action 1</th>
                        <th className={"border bg-info text-light"}> Action 2</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.products.map((products) => (
                            <tr key={products.ItemID}>
                                <td> {products.ItemName}</td>
                                <td> ${products.TotalSalesInDollars}</td>
                                <td>
                                    <Button className={"bg-secondary"} to={`/updateCust/${products.ItemID}`}> Update {products.ItemID}</Button>
                                </td>
                                <td>
                                    <Button className={"bg-secondary"} to={`/deleteCust/${products.ItemID}`}> Delete {products.ItemID}</Button>
                                </td>
                            </tr>
                        )
                    )}
                    </tbody>
                </Table>
                <form method="get" action="/addProduct">
                    <button type="submit" className="ms-5 btn btn-secondary">
                        Insert New Product
                    </button>
                </form>

            </div>
    );
}

export default PList;