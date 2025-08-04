import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleSelectItem(id, isChecked) {
    setItems((items) => {
      const searchedItemIndex = items.findIndex((i) => i.id === id);
      const updatedItems = items.slice();
      updatedItems[searchedItemIndex].packed = isChecked;

      return updatedItems;
    });
  }

  return (
    <div className="app">
      <Logo />
      <Form onАddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onSelectItem={handleSelectItem}
      />
      <Stats />
    </div>
  );
}

export default App;
