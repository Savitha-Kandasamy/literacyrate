import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LitracyService from './LitracyService';

const Edit = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const initialState = {
        id: id,
        state: "",
        district: "",
        year: "",
        totalrate: ""
    }

    const [details, setDetails] = useState(initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await LitracyService.getDetailById(id);
                setDetails(response.data);
                console.log(response.data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const eventSubmit = () => {
        LitracyService.putDetails(id, details);
        navigate("/form")
    }

    const eventCancel = () => {
        navigate("/form")
    }

    const eventChange = (event) => {
        setDetails({...details, [event.target.name] : event.target.value});
    }

    return (
        <div>
            <input placeholder="state" name="state" onChange={eventChange} value={details.state}/>
            <input placeholder="district" name="district" onChange={eventChange} value={details.district}/>
            <input placeholder="year" name="year" onChange={eventChange} value={details.year}/>
            <input placeholder="totalrate" name="totalrate" onChange={eventChange} value={details.totalrate}/>

            <button onClick={eventSubmit}>Update</button>
            <button onClick={eventCancel}>Cancel</button>
        </div>
    )
}

export default Edit
