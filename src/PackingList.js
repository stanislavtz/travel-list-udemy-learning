import Item from "./Item";

function PackingList({items, onDeleteItem, onToggleItem}) {
  return (
    <div className="list">
      <ul>
        {items.length === 0 && <p style={{textAlign: "center"}}>No items added yet!</p>}
        {items.map((item) => (
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
    </div>
  );
}

export default PackingList;
