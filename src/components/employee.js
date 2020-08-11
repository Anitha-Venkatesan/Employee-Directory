import React from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

export default function Employee(props) {
    return (
        <Container className = "mt-5">
            <Col>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th onClick={() => props.sortByName("name")}>Name
                 </th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {//map to loop through each item in the array
                            props.data.map(row => (
                                <tr key={row.id}>
                                    <td>
                                        {row.name}
                                    </td>
                                    <td>
                                        {row.role}
                                    </td>
                                    <td>
                                        {row.email}
                                    </td>
                                    <td>
                                        {row.mobile}
                                    </td>
                                </tr>

                            ))
                        }

                    </tbody>
                </Table>
            </Col>

        </Container>
    )

}