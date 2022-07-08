import './App.css';
import { Link } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header/>
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
      <Button variant="primary">Button #1</Button>
      <Footer />
    </div>
  );
}

export default App;
