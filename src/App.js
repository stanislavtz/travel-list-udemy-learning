import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    console.log(newItem);
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // function handleToggleSelect(id, isPacked) {
  //   setItems((items) => {
  //     const searchedItemIndex = items.findIndex((i) => i.id === id);
  //     const updatedItems = items.slice();
  //     updatedItems[searchedItemIndex].packed = isPacked;

  //     return updatedItems;
  //   });
  // }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : {...item}));
  }

  return (
    <div className="app">
      <Logo />
      <Form onАddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

export default App;
