import axios from "axios";

const API_BASE_URL = "http://localhost:8080/"

class Litracy {

    addDetails(details) {
        return axios.post(API_BASE_URL + "add", details);
    }

    getDetails() {
        return axios.get(API_BASE_URL + "get");
    }

    deleteDetails(id) {
        return axios.delete(API_BASE_URL + "delete/" + id);
    }

    getDetailById(id) {
        return axios.get(API_BASE_URL + "get/" + id)
    }

    putDetails(id, details) {
        return axios.put(API_BASE_URL + "update/" + id, details)
    }
}

export default new Litracy();