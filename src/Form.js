import { useState } from "react";

function Form({getAddedItem}) {
  const [inputtedItem, setInputtedItem] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    getAddedItem({description: inputtedItem, quantity: itemQuantity, packed: false});
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={inputtedItem}
        type="text"
        placeholder="Item..."
        onChange={(e) => setInputtedItem(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

export default Form;
