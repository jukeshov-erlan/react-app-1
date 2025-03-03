import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "London", "Paris", "Berlin"];
  let selectedIndex = 0;
  //hook
  useState
  // Event handler Обработчик события
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {selectedIndex = index;}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
