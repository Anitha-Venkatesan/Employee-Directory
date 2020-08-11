import React from "react";

export default function Employee(props) {
    return (
        <table>
            <thead>
                <tr>
                 <th onClick = {() => props.sortByName("name")}>Name
                 </th>
                 <th>Role</th>
                 <th>Email</th>
                 <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                {//map to loop through each item in the array
                    props.data.map(row  => (
                        <tr key = {row.id}>
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