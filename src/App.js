import "./App.css";
import FullName from "./Components/Profile/FullName";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";
import { Card, Button } from "react-bootstrap";
import logo from "./ras.jpg";
import Adreess from "./Components/Profile/Adress";

function App() {
  return (
    <>
      <div className="App">
        <Card style={{ width: "18rem" }}>
          <img alt="logo" src={logo} />
          <ProfilePhoto></ProfilePhoto>
          <Card.Body>
            <Card.Title>Profile</Card.Title>
            <Card.Text>
              <FullName></FullName>
              <Adreess></Adreess>
            </Card.Text>
            <Button variant="primary">Go Profile</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
