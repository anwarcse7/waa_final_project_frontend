import React, { Component } from 'react'
import ApiService from '../../services/ApiService';

class StudentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        // this.deleteStudent = this.deleteStudent.bind(this);
    }

    url = "http://localhost:8080/api/v1/students";


    // deleteStudent(id){
    //     ApiService.delete(url, id).then( res => {
    //         this.setState({students: this.state.students.filter(s => s.id !== id)});
    //     });
    // }
    // viewStudent(id){
    //     this.props.history.push(`/view-employee/${id}`);
    // }
    editStudent(id){
        this.props.history.push(`/add-student/${id}`);
    }

    componentDidMount(){
        ApiService.getAll(this.url).then((res) => {
            this.setState({ students: res.data});
        });
    }

    addStudent(){
        this.props.history.push('/add-student/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Student List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Email</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                        student => 
                                        <tr key = {student.id}>
                                             <td> { student.firstName} </td>   
                                             <td> {student.lastName}</td>
                                             <td> {student.email}</td>
                                             <td>
                                                 <button onClick={ () => this.editStudent(student.id)} className="btn btn-info">Update </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button> */}
                                             </td>
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

export default StudentList;