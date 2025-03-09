import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <Alert onClose={setAlertVisibility(false)}>
        <h1>Hello Everybody</h1>
        <p>This is my first react App and it's just a practice</p>
        <p>My name is Erlan and I'm 27 y.o.</p>
        <input type="text" placeholder="write some text..."/>
        <br />
        <br />
        <button>Submit</button>
      </Alert> */}
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
