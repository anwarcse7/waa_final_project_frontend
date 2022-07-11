import { useState } from "react";
import ReactDOM from 'react-dom/client';
import ApiService from "../../services/ApiService";

export default function JobPost() {
    const [inputs, setInputs] = useState({});

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
        });
    }

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
            <input type="submit" />
        </form>
      )
}