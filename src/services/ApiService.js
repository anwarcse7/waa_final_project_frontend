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
        

        try {
            data.tag = ["Tag 1", "Tag 2"];
            // console.log(data);
            const user = JSON.parse(localStorage.getItem('user'));
            const token = user.access_token;
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            console.log(axios.defaults.headers.common);
            console.log(data.description);
            return axios.post(MAIN_URL + 'student/post-job', {
                description: data.description,
                state: data.state,
                city: data.city,
                companyName: data.companyName,
                tag: ["Tag 2", "Tag 3"]
            });
        } catch (error) {
            console.error(error.response.data); 
        }
    }
    getJob() {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user.access_token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        console.log(axios.defaults.headers.common);
        return axios.get(MAIN_URL + 'student/get-job');
    }

    getTag() {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user.access_token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        console.log(axios.defaults.headers.common);
        return axios.get(MAIN_URL + 'common/getAllTag');
    }

}

export default new ApiService();