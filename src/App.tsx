import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Alert>
        <h1>Hello Everybody</h1>
        <p>This is my first react App and it's just a practice</p>
        <p>My name is Erlan and I'm 27 y.o.</p>
        <input type="text" placeholder="write some text..."/>
        <br />
        <br />
        <button>Submit</button>
      </Alert>
      <Button onClick={() => console.log('CLICKED')}>My Button</Button>
    </div>
  );
}

export default App;
