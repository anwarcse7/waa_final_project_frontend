import axios from "axios";
import authHeader from "./auth-header";
const MAIN_URL = "http://localhost:8081/api/v1/";
const student = "students";
class ApiService {
    
    getAll(url) {
        return axios.get(url);
    }

    post(url, data) {
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

    jobPost(data) {
        data.tag = ["Tag 1", "Tag 2"];
        console.log(data);
        return axios.post(MAIN_URL + 'student/post-job', data, { headers: authHeader() });
      }
}

export default new ApiService();