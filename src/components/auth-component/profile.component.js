import React, { Component } from "react";
import ApiService from "../../services/ApiService";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [],
    };
  }

  componentDidMount() {
    ApiService.getAllData(ApiService.GET_PROFILE).then((res) => {
      this.setState({ profileData: res.data.data });
      console.log(res.data.data);
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Profile Update</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <form className="form-inline">
          <div className="row">
          <div className="col-md-4">
              <label>First name:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Last name:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Email:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Username:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>User Type:</label>
              <select className="form-control">
                <option>--Select Type--</option>
                <option>Student</option>
                <option>Faculty</option>
              </select>
            </div>
            <div className="col-md-4">
              <label>Major:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>CGPA:</label>
              <input type="number" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>City:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Resume Upload:</label>
              <input type="file" className="form-control" />
            </div>
            <div className="col-md-4">
              <br/>
              <button className="btn btn-warning">
                <span>Update</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
