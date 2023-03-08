import React, { useState, useEffect } from "react";
import LitracyService from "./LitracyService";
import { useNavigate } from "react-router-dom";

import "./Table.css";
const Table1 = () => {

    const navigate = useNavigate();

    const [details, setDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await LitracyService.getDetails();
                setDetails(response.data);
                console.log(details);
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [])

    const eventEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const eventDelete = (id) => {
        LitracyService.deleteDetails(id).then(() => {
            if(details){
                setDetails((prevElement) => {
                    return prevElement.filter(ele => ele.id !== id);
                })
            }
        })
        console.log("delete");
    }

    return (
        <table border={1}>
            <thead>
                <caption>DETAILS</caption>
                <tr>
                    <th>Id</th>
                    <th>State</th>
                    <th>District</th>
                    <th>Year</th>
                    <th>TotalRate</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {details.map(user => (
                    <tr >
                        <td>{user.id}</td>
                        <td>{user.state}</td>
                        <td>{user.district}</td>
                        <td>{user.year}</td>
                        <td>{user.totalrate}</td>
                        <button onClick={(id) => eventEdit(user.id)}>EDIT</button>
                        <button onClick={() => eventDelete(user.id)}>DELETE</button>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table1;