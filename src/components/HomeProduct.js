import React from 'react';
import {Table} from "react-bootstrap";

function HomeProduct(product) {
    return (
        <div>
            <Table className={"ms-5 table-borderless"}>
                <tbody>
                {product.product.map((product) => (
                        <tr key={product.ItemID} >
                            <td className={" bg-warning text-dark fw-bold"}> {product.ItemNumber}</td>
                            <td className={" bg-warning text-dark fw-bold"}> {product.ItemName}</td>
                            <td className={" bg-warning text-dark fw-bold"}> - </td>
                            <td className={" bg-warning text-dark fw-bold"}> ${product.TotalSalesInDollars}</td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default HomeProduct;