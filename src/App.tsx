// import Message from './Message';
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "London", "Paris", "Berlin"];
  let items2 = ["Erlan", "Diana", "Ruslan", "Temirlan", "Kanykei"];


  const handleSelectItem = (item: string) => console.log(item);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={items2}
        heading="Names"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
