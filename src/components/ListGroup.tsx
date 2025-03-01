function ListGroup() {
  const items = ["New York", "San Francisco", "London", "Paris", "Berlin"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
