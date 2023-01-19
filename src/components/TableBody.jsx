import Like from "./Like";

const TableBody = (props) => {
  const { items, onLike, onDelete } = props;
  return (
    <tbody>
      {items.map((item) => (
        <tr key={item._id}>
          <td>{item.title}</td>
          <td>{item.genre.name}</td>
          <td>{item.numberInStock}</td>
          <td>{item.dailyRentalRate}</td>
          <td>
            <Like liked={item.liked} onLike={() => onLike(item)} />
          </td>
          <td>
            <button
              onClick={() => onDelete(item)}
              className="btn btn-danger btn-sm">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
