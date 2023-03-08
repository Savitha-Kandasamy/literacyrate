import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LitracyService from './LitracyService.js';

const Form = () => {

    const navigate = useNavigate();

    const initialState = {
        id: "",
        state: "",
        district: "",
        year: "",
        totalrate: ""
    }

    const [details, setDetails] = useState(initialState);

    const eventChange = (event) => {
        setDetails({...details, [event.target.name] : event.target.value})
    }

    const eventShow = () => {
        LitracyService.addDetails(details);
        console.log(details);
    }

    return (
        <div>
            <input placeholder="id" name="id" onChange={eventChange}/>
            <input placeholder="state" name="state" onChange={eventChange}/>
            <input placeholder="district" name="district" onChange={eventChange}/>
            <input placeholder="year" name="year" onChange={eventChange}/>
            <input placeholder="totalrate" name="totalrate" onChange={eventChange}/>

            <button onClick={eventShow}>Save</button>
            <button onClick={() => navigate("/details")}>Show Details</button>

        </div >
    )
}

export default Form
