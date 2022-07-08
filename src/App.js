import './App.css';
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/registration">Registration</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
}

export default App;
