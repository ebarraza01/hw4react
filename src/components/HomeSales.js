import React from 'react';
import {Table, ToastBody} from "react-bootstrap";

function HomeSales(sales) {
    return (
        <div>
            <div>
                <Table className={"ms-5 table-borderless"}>
                    <tbody>
                    {sales.sales.map((sales) => (
                            <tr key={sales.SalesID} >
                                <td className={" bg-warning text-dark fw-bold"}> {sales.MonthNumber}</td>
                                <td className={" bg-warning text-dark fw-bold"}> {sales.SalesMonth}</td>
                                <td className={" bg-warning text-dark fw-bold"}> - </td>
                                <td className={" bg-warning text-dark fw-bold"}> ${sales.TotalSalesInDollars}</td>
                            </tr>
                        )
                    )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default HomeSales;
