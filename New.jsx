import React, { Component } from "react";
import axios from "axios";

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Id: "",
            State: "",
            District: "",
            Year: "",
            TotalRate: "",
            rateData: [], // Array to store rate data fetched from the server
        };
    }

    
    componentDidMount() {
        // Fetch rate data from server when component mounts
        axios.get("http://localhost:8080/get").then((response) => {
            this.setState({ rateData: response.data });
        });
    }

    handleIdChange = (event) => {
        this.setState({ Id: event.target.value });
    };
    handleState = (event) => {
        this.setState({ State: event.target.value });
    };
    handleDistrict = (event) => {
        this.setState({ District: event.target.value });
    };
    handleYear = (event) => {
        this.setState({ Year: event.target.value });
    };
    handleTotalRate = (event) => {
        this.setState({ TotalRate: event.target.value });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            Id: this.state.Id,
            State: this.state.State,
            District: this.state.District,
            Year: this.state.Year,
            TotalRate: this.state.TotalRate,
        };
        console.log(data);
        axios.post("http://localhost:8080/add", data).then((response) => {
            // Add new rate data to the state and clear the form
            this.setState({
                rateData: [...this.state.rateData, response.data],
                Id: "",
                State: "",
                District: "",
                Year: "",
                TotalRate: "",
            });
        });
    };

    handleUpdate = (Id, data) => {
        // Send PUT request to update rate data with the given ID
        axios.put(`http://localhost:8080/update/${Id}`, data).then((response) => {
            // Update the state to reflect the updated rate data
            const updatedrateData = this.state.rateData.map((rate) => {
                if (rate.Id === response.data.Id) {
                    return response.data;
                } else {
                    return rate;
                }
            });
            this.setState({ rateData: updatedrateData });
        });
    };

    handleDelete = (Id) => {
        // Send DELETE request to remove rate data with the given ID
        axios.delete(`http://localhost:8080/delete/${Id}`).then((response) => {
            // Update the state to remove the deleted fuel data
            const updatedrateData = this.state.rateData.filter(
                (rate) => rate.Id !== Id
            );
            this.setState({ rateData: updatedrateData });
        });
    };

    handleEdit = (data) => {
        this.setState({
            Id: data.Id,
            State: data.State,
            District: data.District,
            Year: data.Year,
            TotalRate: data.TotalRate,
            isEdit: true,
        });
        console.log(this.state.Id);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    // handleUpdate = (event) => {
    //     event.preventDefault();
    //     const data = {
    //         Id:this.state.Id,
    //         State: this.state.State,
    //         District: this.state.District,
    //         Year: this.state.Year,
    //         TotalRate: this.state.TotalRate,    
    //     };
    //     axios
    //         .put(`http://localhost:8080/update/${Id}`, data)
    //         .then((res) => {
    //             console.log(res.data);
    //             this.setState({
    //                 State: "",
    //                 District: "",
    //                 Year: "",
    //                 TotalRate: "",
    //             });
    //             this.props.history.push("/");
    //         })
    //         .catch((err) => console.log(err));
    // };
    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} className="rate">
                    <label className="login-label">Id</label>
                    <input
                        className="rate"
                        type="number"
                        value={this.state.Id}
                        onChange={this.handleIdChange}
                    />
                    <br /><br />
                    <label className="login-label">State</label>
                    <input
                        className="rate"
                        type="text"
                        value={this.state.State}
                        onChange={this.handleState}
                    />
                    <br /><br />

                    <label className="login-label">District</label>
                    <input
                        className="rate"
                        type="text"
                        value={this.state.District}
                        onChange={this.handleDistrict}
                    />
                    <br /><br />

                    <label className="login-label">Year</label>
                    <input
                        className="rate"
                        type="text"
                        value={this.state.Year}
                        onChange={this.handleYear}
                    />
                    <br /><br />

                    <label className="login-label">Total Rate</label>
                    <input
                        className="rate"
                        type="text"
                        value={this.state.TotalRate}
                        onChange={this.handleTotalRate}
                    />
                    <br /><br />

                    <button className="submitt" type="submit" id="asd">
                        Submit
                    </button>
                    <br /><br />
                </form>

                <table className="output">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>State</th>
                        <th>District</th>
                        <th>Year</th>
                        <th>TotalRate</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.rateData.map((data) => (
                            <tr key={data.Id}>
                                <td>{data.Id}</td>
                                <td>{data.State}</td>
                            <td>{data.District}</td>
                            <td>{data.Year}</td>
                            <td>{data.TotalRate}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(data)}>Edit</button>
                                </td>

                                <td>
                                    <button
                                        onClick={() => this.handleDelete(data.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br><br></br><br></br><br></br>
                <form onSubmit={this.handleUpdate}>
                    <input type="hidden" name="id" value={this.state.Id} />
                    <label>State</label>
                    <input
                        type="text"
                        name="State"
                        value={this.state.State}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>District</label>
                    <input
                        type="text"
                        name="District"
                        value={this.state.District}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Year</label>
                    <input
                        type="text"
                        name="Year"
                        value={this.state.Year}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Total Rate</label>
                    <input
                        type="text"
                        name="TotalRate"
                        value={this.state.TotalRate}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    
                    <button type="submit">Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>        </div>

        );
    }
}
export default New;