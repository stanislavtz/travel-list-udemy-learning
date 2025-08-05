function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start preparing your luggage.</em>
      </footer>
    );
  }

  const numberItems = items.length;
  const packedItems = items.filter((i) => i.packed).length;
  const percentage = Math.round((packedItems / numberItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything. Ready to go!"
          : `You have ${numberItems} items in your list, and you already packed ${packedItems} (${percentage}%).`}
      </em>
    </footer>
  );
}

export default Stats;
