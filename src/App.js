import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function onGetAddedItem(item) {
    setItems(i => [...i, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form getAddedItem={onGetAddedItem}/>
      <PackingList items={items}/>
      <Stats />
    </div>
  );
}

export default App;
