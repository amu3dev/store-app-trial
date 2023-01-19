import _ from "lodash";
export function paginate(items, pageNumber, pageSize, genre) {
  if (genre === "All Genres");
  else items = items.filter((item) => item.genre.name === genre);
  const startIndex = (pageNumber - 1) * pageSize;
  return [_(items).slice(startIndex).take(pageSize).value(), items];
}
