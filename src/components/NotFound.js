import React from 'react';

function NotFound(props) {
    return (
        <body>
            <div className="container mt-5">
                <div className="bg-white"
                    style={{ border: "2px solid black", margin: "0 5% 5% 5%", padding: "2%" }}>
                    <p className="mt-5">
                        Sorry This Page Could Not Be Found. Click Home Above to Return to Home.
                    </p>
                </div>
            </div>

        </body>
    );
}

export default NotFound;