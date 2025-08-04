import { useState } from "react";

function Item({ id, description, quantity, packed, onDeleteItem, onSelectItem }) {
  const [checked, setChecked] = useState(false);

  function handleSelectCheckBox() {
    setChecked(c => {
      c = !c;
      onSelectItem(id, c);

      return c;
    });
  }

  return (
    <li>
      <input type="checkbox" value={checked} onChange={handleSelectCheckBox}/>
      <span style={packed ? { textDecoration: "line-through" } : null}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}

export default Item;
