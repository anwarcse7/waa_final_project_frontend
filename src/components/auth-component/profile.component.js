import React, { Component } from "react";
export default class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h1>Profile Update</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <form class="form-inline">
          <div className="row">
          <div className="col-md-4">
              <label for="email">First name:</label>
              <input type="text" class="form-control" />
            </div>
            <div className="col-md-4">
              <label for="">Last name:</label>
              <input type="text" class="form-control" />
            </div>
            <div className="col-md-4">
              <label>Email:</label>
              <input type="text" class="form-control" />
            </div>
            <div className="col-md-4">
              <label>Username:</label>
              <input type="text" class="form-control" />
            </div>
            <div className="col-md-4">
              <label>User Type:</label>
              <select class="form-control">
                <option>--Select Type--</option>
                <option>Student</option>
                <option>Faculty</option>
              </select>
            </div>
            <div className="col-md-4">
              <label>Major:</label>
              <input type="text" class="form-control" />
            </div>
            <div className="col-md-4">
              <label>CGPA:</label>
              <input type="number" class="form-control" />
            </div>
            <div className="col-md-4">
              <label>City:</label>
              <input type="text" class="form-control" />
            </div>
            <div className="col-md-4">
              <label>Resume Upload:</label>
              <input type="file" class="form-control" />
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
