import Item from "./Item";

function PackingList({items, onDeleteItem}) {
  return (
    <div className="list">
      <ul>
        {items.length === 0 && <p>No added items yet!</p>}
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
