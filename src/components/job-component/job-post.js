import React, { Component } from "react";
import Multiselect from "multiselect-react-dropdown";
import ApiService from "../../services/ApiService";

class JobPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ApiService.getAllData(ApiService.TAG_LIST).then((res) => {
      this.setState({ tags: res.data.tagList });
      console.log(res.data.tagList);
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      id: null,
      description: this.state.description,
      tag: ["Tag 1", "Tag 2"],
      state: this.state.state,
      city: this.state.city,
      companyName: this.state.companyName,
    };
    console.log(data);
    ApiService.postData(ApiService.JOB_POST, data).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSelect(selectedList, selectedItem) {}

  onRemove(selectedList, removedItem) {}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter your description:
            <input
              type="text"
              name="description"
              //  value={inputs.description || ""}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Enter your state:
            <input
              type="text"
              name="state"
              //  value={inputs.state || ""}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Enter your city:
            <input
              type="text"
              name="city"
              //  value={inputs.city || ""}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Enter companyName:
            <input
              type="text"
              name="companyName"
              //  value={inputs.companyName || ""}
              onChange={this.handleChange}
            />
          </label>
          <Multiselect
            options={this.state.tags}
            onSelect={this.onSelect}
            onRemove={this.onRemove}
            displayValue="tags"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default JobPost;
