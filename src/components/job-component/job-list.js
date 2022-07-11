import React, { Component } from 'react'
import ApiService from '../../services/ApiService';

class JobList extends Component {
    constructor(props) {
        super(props)
        this.state = {
                jobs: []
        }
    }

    componentDidMount(){
        ApiService.getAllData(ApiService.JOB_LIST).then((res) => {
            this.setState({ jobs: res.data.jobList });
            console.log(res.data.jobList);
        });
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