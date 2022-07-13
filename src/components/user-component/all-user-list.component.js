import React, { Component } from "react";
import ApiService from "../../services/ApiService";

class AllUserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };

    this.activeInactive = this.activeInactive.bind(this);
  }

  componentDidMount() {
    ApiService.getAllData(ApiService.GET_ALLUSER).then((res) => {
      this.setState({ users: res.data.data });
      console.log(res);
    });
  }

  activeInactive() {
    // ApiService.postData(ApiService.SEARCH_JOB, data).then(
    //   (res) => {
    //     console.log(res.data);
    //     this.setState({ users: res.data.results });
    //     console.log(res.data.results);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center">User List</h2>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Username</th>
                <th> Usertype</th>
                <th> Status</th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((u) => (
                <tr key={u.id}>
                  <td> {u.email} </td>
                  <td> {u.userType} </td>
                  <td>
                    {" "}
                    {u.active ? (
                      <span className="text-success">Active</span>
                    ) : (
                      <span className="text-danger">Inactive</span>
                    )}
                  </td>
                  <td>
                    {" "}
                    {u.active ? (
                      <button
                        class="btn btn-danger"
                        type="submit"
                        onClick={() => this.activeInactive(u.id)}
                      >
                        I
                      </button>
                    ) : (
                      <button
                        class="btn btn-success"
                        type="submit"
                        onClick={() => this.activeInactive(u.id)}
                      >
                        A
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AllUserList;
