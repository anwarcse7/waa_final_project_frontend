import axios from "axios";

const MAIN_URL = "http://localhost:8080/api/v1/";
const student = "students";
class ApiService {
    getAll(url) {
        return axios.get(url);
    }

    create(url, data) {
        return axios.post(url, data);
    }

    getById(url, id) {
        return axios.get(url + '/' + id);
    }

    update(url, data, id) {
        return axios.put(url + '/' + id, data);
    }

    delete(url, id) {
        return axios.delete(url + '/' + id);
    }
}

export default new ApiService();