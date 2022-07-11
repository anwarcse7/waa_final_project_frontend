import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/dashboard";
// import Login from "./components/login";
import Registration from "./components/registration";
import Profile from "./components/profile";
import StudentList from "./components/student-component/StudentList";
import CreateStudent from "./components/student-component/CreateStudent";
import Login from "./components/auth-component/login.component";
import JobPost from "./components/job-component/job-post";
import JobList from "./components/job-component/job-list";
function App() {
  const [token, setToken] = useState();
  let user = localStorage.getItem("user");
  if(!user) {
    // return <Login setToken={setToken} />
    return <Login />
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="registration" element={<Registration />} />
        <Route path="profile" element={<Profile />} />
        <Route path="StudentList" element={<StudentList />} />
        <Route path = "/add-student/:id" component = {CreateStudent}></Route>
        
        <Route path="job-post" element={<JobPost />} />
        <Route path="job-list" element={<JobList />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
