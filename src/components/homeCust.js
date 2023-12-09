import React from 'react';
import {Table} from "react-bootstrap";

function HomeCust(cust) {
    return (
        <div>
            <Table className={"ms-5 table-borderless"}>
                <tbody>
                {cust.cust.map((cust) => (
                        <tr key={cust.CustomerID} >
                            <td className={" bg-warning text-dark fw-bold"} > {cust.CustomerNumber}</td>
                            <td className={" bg-warning text-dark fw-bold"}> {cust.CustomerName}</td>
                            <td className={" bg-warning text-dark fw-bold"}> - </td>
                            <td className={" bg-warning text-dark fw-bold"}> ${cust.TotalSalesInDollars}</td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default HomeCust;