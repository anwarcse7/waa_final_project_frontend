import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react"; 
import { TagCloud } from 'react-tagcloud';
import axios from "axios";

import Pie from "./pie";
import StateBar from "./stateBar";

const Dashboard = () => {
    
  const [studentsByState, setStudentsByState] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/v1/faculty/stat")
      .then(({ data }) => {
        setStudentsByState(data);
        data.map((res,i) =>{
          console.log(res);
          return res;
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  // const DataTable = () => {
  //   return studentsByState.map((res, i) => {
  //     return <StudentTableRow obj={res} key={i} />;
  //   });
  // };

    const option = {
      xAxis: {
        type: 'category',
        data: ['Iowa', 'Texas', 'California', 'Washington']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70],
          type: 'bar'
        }
      ]
    }; 

    const data = [
      { value: 'jQuery', count: 25 },
      { value: 'MongoDB', count: 18 },
      { value: 'JavaScript', count: 38 },
      { value: 'React', count: 30 },
      { value: 'Nodejs', count: 28 },
      { value: 'Express.js', count: 25 },
      { value: 'HTML5', count: 33 },
      { value: 'CSS3', count: 20 },
      { value: 'Webpack', count: 22 },
      { value: 'Babel.js', count: 7 },
      { value: 'ECMAScript', count: 25 },
      { value: 'Jest', count: 15 },
      { value: 'Mocha', count: 17 },
      { value: 'React Native', count: 27 },
      { value: 'Angular.js', count: 30 },
      { value: 'TypeScript', count: 15 },
      { value: 'Flow', count: 30 },
      { value: 'NPM', count: 11 },
    ]

    // custom renderer is function which has tag, computed font size and
    // color as arguments, and returns react component which represents tag
    const customRenderer = (tag, size, color) => (
      <span
        key={tag.value}
        style={{
          animation: 'blinker 3s linear infinite',
          animationDelay: `${Math.random() * 2}s`,
          fontSize: `${size / 2}em`,
          border: `2px solid ${color}`,
          margin: '3px',
          padding: '3px',
          display: 'inline-block',
          color: 'black',
        }}
      >
        {tag.value}
      </span>
    )


    return (

      <div class="container">
        <h1>Dashboard</h1>
        <p>ECharts to create live charts for dashboards:</p>
        <div class="panel-group">
          <div class="panel panel-default">
            <div class="panel-heading">Number of job advertisements per location.</div>
            <div class="panel-body">
            <ReactEcharts option={option} />
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">Number of students per state.</div>
            <div class="panel-body"><StateBar /></div>
          </div>
          <div className="row">
            <div className="col-md-6">
                <div class="panel panel-default">
                  <div class="panel-heading">Tags</div>
                  <div class="panel-body"><TagCloud tags={data} minSize={1} maxSize={5} style={{ width: 500, textAlign: 'left' }} renderer={customRenderer} /></div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="panel panel-default">
                  <div class="panel-heading">Tags by location</div>
                  <div class="panel-body"><TagCloud tags={data} minSize={1} maxSize={5} style={{ width: 500, textAlign: 'left' }} renderer={customRenderer} /></div>
                </div>
              </div>
          </div>
          
          <div className="col-md-6">
            <div class="panel panel-default">
            <div class="panel-heading">Average time spent to find a job per gpa range.</div>
            <div class="panel-body"> <Pie /></div>
          </div>
          </div>          

          
          
        </div>
      </div>    
      
    );

  };
  
  export default Dashboard;
  