import React, { Component } from 'react'
import ApiService from '../../services/ApiService';

class JobList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                jobs: []
        }
    }

    url = "http://localhost:8081/api/v1/student/get-job";
    componentDidMount(){
        // ApiService.getAll(this.url).then((res) => {
        //     this.setState({ jobs: res.data});
        // });

        ApiService.getJob().then((response) => {
            console.log(response.data.jobList);
            this.setState({ jobs: response.data.jobList});
        }).catch();
    }
    render() {
        return (
            <div>
                 <h2 className="text-center">Job List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Description</th>
                                    <th> State</th>
                                    <th> City</th>
                                    <th> Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.jobs.map(
                                        job => 
                                            <tr key={job.id}>
                                             <td> { job.description} </td>   
                                             <td> { job.state} </td>   
                                             <td> {job.city}</td>
                                             <td> {job.companyName}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default JobList;