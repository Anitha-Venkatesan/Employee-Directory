import React from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown, faSort } from "@fortawesome/free-solid-svg-icons";

export default function Employee(props) {
    return (
        <Container className = "mt-5">
            <Col>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th onClick={() => props.sortByName("name")}>
                                <span className ="mr-2">Name</span>
                                {props.sortOrder === 'desc' && <FontAwesomeIcon icon={faSortDown} />}
                                {props.sortOrder === 'asc' && <FontAwesomeIcon icon={faSortUp} />}
                                {!props.sortOrder && <FontAwesomeIcon icon={faSort} />}
                            </th>
                            <th >Role</th>
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