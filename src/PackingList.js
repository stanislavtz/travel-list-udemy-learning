import { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [orderCriteria, setOrderCriteria] = useState("");

  let sortedItems = [...items];

  if (orderCriteria === "adding") {
    sortedItems = [...items];
  }

  if (orderCriteria === "description") {
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  if (orderCriteria === "quantity") {
    sortedItems = [...items].sort((a, b) => a.quantity - b.quantity);
  }

  if (orderCriteria === "packing") {
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  }

  function handleClearList() {
    onClearList();
    setOrderCriteria("");
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.length === 0 && (
          <p style={{ textAlign: "center" }}>No items added yet!</p>
        )}
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      {items.length > 0 && (
        <div className="actions">
          <select
            value={orderCriteria}
            onChange={(e) => setOrderCriteria(e.target.value)}
          >
            <option value="">Order by ...</option>
            <option value="adding">Adding</option>
            <option value="description">Description</option>
            <option value="quantity">Quantity</option>
            <option value="packing">Packing</option>
          </select>
          <button onClick={handleClearList}>Clear List</button>
        </div>
      )}
    </div>
  );
}

export default PackingList;
