import React from 'react';
import {Button, Table} from "react-bootstrap";

function SList(sales) {
    console.log(sales)
    return (
        <div>
            <Table table striped bordered border>
                <thead>
                <tr>
                    <th className={"border bg-info text-light"}> Date </th>
                    <th className={"border bg-info text-light"}> Customer </th>
                    <th className={"border bg-info text-light"}> Product </th>
                    <th className={"border bg-info text-light"}> Quantity </th>
                    <th className={"border bg-info text-light"}> Total Sales </th>
                </tr>
                </thead>
                <tbody>
                {sales.sales.map((sales) => (
                        <tr key={sales.ItemID}>
                            <td> {sales.SalesDate}</td>
                            <td> {sales.CustomerName}</td>
                            <td> {sales.ItemName}</td>
                            <td> {sales.Quantity}</td>
                            <td> ${sales.TotalSales}</td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default SList;