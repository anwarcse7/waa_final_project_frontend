import axios from "axios";

const MAIN_URL = "http://localhost:8081/api/v1/";
const user = JSON.parse(localStorage.getItem('user'));

class ApiService {
    getAllData(uri) {
        if (user && user.access_token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${user.access_token}`;
        }
        return axios.get(MAIN_URL + uri);
    }

    postData(uri, data) {
        if (user && user.access_token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${user.access_token}`;
        }
        return axios.post(MAIN_URL + uri, data);
    }

    getById(uri, id) {
        if (user && user.access_token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${user.access_token}`;
        }
        return axios.get(MAIN_URL + uri + '/' + id);
    }

    updateData(uri, data, id) {
        if (user && user.access_token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${user.access_token}`;
        }
        return axios.put(MAIN_URL + uri + '/' + id, data);
    }

    deleteData(uri, id) {
        if (user && user.access_token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${user.access_token}`;
        }
        return axios.delete(MAIN_URL + uri + '/' + id);
    }

    // API Absulate Url
    JOB_LIST = "student/get-job";
    JOB_POST = "student/post-job";
    TAG_LIST = "common/getAllTag";
}

export default new ApiService();