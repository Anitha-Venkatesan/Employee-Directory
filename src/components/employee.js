import React from "react";

export default function Employee(props) {
    return (
        <table>
            <thead>
                <tr>
                 <th>Name</th>
                 <th>Role</th>
                 <th>Email</th>
                 <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(row  => (
                        <tr>
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
        </table>
    )

}