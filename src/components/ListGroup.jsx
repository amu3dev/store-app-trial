const ListGroup = ({ items, onListGroupItemSelected, currentGenre }) => {
  return (
    <div className="list-group">
      {items.map((item) => (
        <button
          onClick={() => onListGroupItemSelected(item)}
          key={item}
          type="button"
          className={
            "list-group-item list-group-item-action" +
            (item === currentGenre ? " active " : "")
          }
          aria-current="true">
          {item}
        </button>
      ))}
    </div>
  );
};

export default ListGroup;
