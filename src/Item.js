function Item({
  id,
  description,
  quantity,
  packed,
  onDeleteItem,
  onToggleItem,
}) {
  return (
    <li>
      <input type="checkbox" value={packed} onChange={() => onToggleItem(id)} />
      <span style={packed ? { textDecoration: "line-through" } : null}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}

export default Item;
