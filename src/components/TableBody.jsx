import Like from "./Like";
import { Link } from "react-router-dom";

const TableBody = ({ items, onLike, onDelete }) => {
  return (
    <tbody>
      {items.map((item) => (
        <tr key={item._id}>
          <td>
            <Link to={item._id}> {item.title}</Link>
          </td>
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
