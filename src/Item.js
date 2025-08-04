function Item({ id, description, quantity, packed, onDeleteItem }) {
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : null}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}

export default Item;
