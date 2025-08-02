function Item({ description, quantity, packed }) {
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : null}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
