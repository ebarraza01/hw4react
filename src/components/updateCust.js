import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";

function UpdateCust(props) {
    const {id} = useParams();
    let url = `http://localhost:8000/cust/${id}` ;
    let {data , error, isPending} = useFetch( url );
    const navigate = useNavigate();
    const [values, setValues] = useState( {
        id: id,
        name: data.CustomerName,
        email: data.CustomerEmail
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        let URL = `http://localhost:8000/cust/${values.id}`;
        fetch( URL , {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(values)
        }).then(() => {
            console.log("Added new blog");
            // useHistory.go(-1);
            navigate('/cust');
        })
    }
    // })
    return (
        <div>
            <h2> Customer Update for id:{id} </h2>
            {isPending && <div> Loading </div>}
            {error && <div> {error} </div>}
            {values && (
                <div>
                    <Form onSubmit={handleSubmit}  >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Customer Name:</Form.Label>
                            <Form.Control type="text" placeholder="Name" required
                                          value={values.name || ''}
                                          onChange={ (e) => setValues({...values, CustomerName : e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAuthor">
                            <Form.Label>Customer Email:</Form.Label>
                            <Form.Control type="text" placeholder="Email" required
                                          value={values.email || ''}
                                          onChange={ (e) => setValues({...values, CustomerEmail : e.target.value})}
                            />
                        </Form.Group>

                        {!isPending && <Button variant="secondary" type="submit">Submit</Button>}
                        {isPending && <Button disabled variant="primary" type="submit">Adding  Content </Button>}

                    </Form>
                    <ul className={"list-unstyled"}>
                        <li>Name:{values.CustomerName || ''}</li>
                        <li>Email:{values.CustomerEmail || ''}</li>
                    </ul>
                    <Button className={"bg-secondary"} href="/home"> Back Home </Button>
                </div>
            )}
        </div>
    );
}

export default UpdateCust;