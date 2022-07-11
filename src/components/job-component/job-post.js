// import { useState } from "react";
import React, { Component, useState } from 'react'
import ReactDOM from "react-dom/client";
import Multiselect from "multiselect-react-dropdown";
import ApiService from "../../services/ApiService";

// class JobPost extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       tags: [],
//       inputs: {},
//       setInputs: {}
//     };
//   }

//   url = "http://localhost:8081/api/v1/common/getAllTag";
//   componentDidMount() {
//     ApiService.getJob()
//       .then((response) => {
//         console.log(response.data.jobList);
//         this.setState({ tags: response.data.jobList });
//       })
//       .catch();
//   }

//     handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]: value}))
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(inputs);

//         ApiService.jobPost(inputs).then((response) => {
//             console.log(response);
//         }).then(response => {
//           console.log(response.data);
//           // if (response.data.access_token) {
//           //   localStorage.setItem("user", JSON.stringify(response.data));
//           // }
//           // return response.data;
//         });
//     }

//   render() {
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter your description:
//           <input
//             type="text"
//             name="description"
//             value={inputs.description || ""}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Enter your state:
//           <input
//             type="text"
//             name="state"
//             value={inputs.state || ""}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Enter your city:
//           <input
//             type="text"
//             name="city"
//             value={inputs.city || ""}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Enter companyName:
//           <input
//             type="text"
//             name="companyName"
//             value={inputs.companyName || ""}
//             onChange={handleChange}
//           />
//         </label>
//         <Multiselect
//           isObject={false}
//           onKeyPressFn={function noRefCheck() {}}
//           onRemove={function noRefCheck() {}}
//           onSearch={function noRefCheck() {}}
//           onSelect={function noRefCheck() {}}
//           options={[
//             "Option 1",
//             "Option 2",
//             "Option 3",
//             "Option 4",
//             "Option 5",
//             "Option 10",
//             "Option 20",
//             "Option 30",
//             "Option 40",
//             "Option 50",
//           ]}
//         />
//         <input type="submit" />
//       </form>
//     );
//   }
// }

// export default JobPost;

export default function JobPost() {
  const [inputs, setInputs, tags] = useState({});
//   this.state = {
//     options: [{name: 'Option 1', id: 1},{name: 'Option 2', id: 2}]
// };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);

        ApiService.jobPost(inputs).then((response) => {
            console.log(response);
        }).then(response => {
          console.log(response.data);
          // if (response.data.access_token) {
          //   localStorage.setItem("user", JSON.stringify(response.data));
          // }
          // return response.data;
        });
    }
  
  //   url = "http://localhost:8081/api/v1/common/getAllTag";
  // const getAllTag = () => {
  //   ApiService.getJob()
  //     .then((response) => {
  //       console.log(response.data.tagList);
  //       this.setState({ tags: response.data.tagList });
  //     })
  //     .catch();
  // }

  React.useEffect(() => {
      ApiService.getTag()
      .then((response) => {
        console.log(response.data.tagList);
        this.setState({ tags: response.data.tagList });
      })
      .catch();
  });

    return (
        <form onSubmit={handleSubmit}>
          <label>Enter your description:
          <input
            type="text"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
          />
          </label>
          <label>Enter your state:
            <input
              type="text"
              name="state"
              value={inputs.state || ""}
              onChange={handleChange}
            />
            </label>
            <label>Enter your city:
            <input
              type="text"
              name="city"
              value={inputs.city || ""}
              onChange={handleChange}
            />
            </label>
            <label>Enter companyName:
            <input
              type="text"
              name="companyName"
              value={inputs.companyName || ""}
              onChange={handleChange}
            />
        </label>
        <Multiselect
            isObject={false}
            onKeyPressFn={function noRefCheck(){}}
            onRemove={function noRefCheck(){}}
            onSearch={function noRefCheck(){}}
            onSelect={function noRefCheck(){}}
            options={[
                          "Option 1",
                          "Option 2",
                          "Option 3",
                          "Option 4",
                          "Option 5",
                          "Option 10",
                          "Option 20",
                          "Option 30",
                          "Option 40",
                          "Option 50",
                        ]}
          />
            <input type="submit" />
        </form>
      )
}
