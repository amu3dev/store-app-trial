import {
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
  FcNumericalSorting12,
  FcNumericalSorting21,
} from "react-icons/fc";

const TableHeader = ({ onSort, headers, sortedColumn }) => {
  return (
    <thead>
      <tr>
        {/* <th
          scope="col"
          onClick={() => {
            onSort(`title`);
          }}>
          Title
        </th>
        <th
          scope="col"
          onClick={() => {
            onSort(`genre.name`);
          }}>
          Genre
        </th>
        <th
          scope="col"
          onClick={() => {
            onSort(`numberInStock`);
          }}>
          Stock
        </th>
        <th
          scope="col"
          onClick={() => {
            onSort(`dailyRentalRate`);
          }}>
          Rate
        </th> */}

        {headers.map((header) => (
          <th
            key={header.name || header.path}
            scope="col"
            onClick={() => onSort(header.path)}>
            {header.name}
            {header.type === "text" ? (
              header.name === "" ? null : header.path === sortedColumn.path &&
                sortedColumn.order === "asc" ? (
                <FcAlphabeticalSortingAz />
              ) : (
                <FcAlphabeticalSortingZa />
              )
            ) : header.name === "" ? null : header.path === sortedColumn.path &&
              sortedColumn.order === "asc" ? (
              <FcNumericalSorting12 />
            ) : (
              <FcNumericalSorting21 />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
