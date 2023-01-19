const TableData = (props) => {
  const { itemsCount, currentGenre } = props;
  return (
    <div>
      {itemsCount > 0 ? (
        <h1>
          <span className="badge bg-secondary m-1">
            Showing {itemsCount + ` `}
            {currentGenre === `All Genres` ? "" : currentGenre + ` `}
            Movies in the Database
          </span>
        </h1>
      ) : (
        <h1>
          <span className="badge bg-secondary m-1">
            {currentGenre === `All Genres`
              ? `No movies in the Database`
              : ` No ` + currentGenre + ` movies in the database `}
          </span>
        </h1>
      )}
    </div>
  );
};
export default TableData;
