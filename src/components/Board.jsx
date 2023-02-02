import React, { Component } from "react";
import Pagination from "./Pagination";
import TableData from "./TableData";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import ListGroup from "./ListGroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Board extends Component {
  state = {
    movies: [],
    generes: [],
    moviesNumbers: 0,
    itemsPerPage: 4,
    currentPage: 1,
    currentGenre: "All Genres",
    sortedColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const generes = ["All Genres", ...getGenres().map((genre) => genre.name)];
    this.setState({ generes });
    const movies = getMovies();
    this.setState({ movies });
    const moviesNumbers = getMovies().length;
    this.setState({ moviesNumbers });
  }

  render() {
    const { movies, currentPage, itemsPerPage, generes, currentGenre } =
      this.state;

    const orderedMovies = _.orderBy(
      movies,
      [this.state.sortedColumn.path],
      [this.state.sortedColumn.order]
    );
    const moviesPaginated = paginate(
      orderedMovies,
      currentPage,
      itemsPerPage,
      currentGenre
    );

    return (
      <div>
        <table className="table">
          <tbody className="border border-light">
            <tr>
              <td>
                <ListGroup
                  items={generes}
                  onListGroupItemSelected={this.handelListGroupItemSelected}
                  currentGenre={currentGenre}
                  itemsListCount={moviesPaginated[1].length}
                />
              </td>
              <td>
                <TableData
                  currentGenre={currentGenre}
                  itemsCount={moviesPaginated[1].length}
                />
                <table className="table">
                  <TableHeader
                    onSort={this.handelSort}
                    headers={this.headers}
                    sortedColumn={this.state.sortedColumn}
                  />
                  <TableBody
                    currentGenre={currentGenre}
                    items={moviesPaginated[0]}
                    itemsCount={moviesPaginated[1].length}
                    onDelete={this.handelDelete}
                    onLike={this.handelLike}
                    onListGroupItemSelected={this.handelListGroupItemSelected}
                    generes={generes}
                  />
                </table>
              </td>
            </tr>
          </tbody>
          <tfoot className="border-0">
            <tr>
              <td className="invisible"></td>
              <td>
                <Pagination
                  itemsCount={moviesPaginated[1].length}
                  itemsPerPage={itemsPerPage}
                  onPageChange={this.handelPageChange}
                  currentPage={currentPage}
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
  headers = [
    { name: "Title", path: "title", type: "text" },
    { name: "Genre", path: "genre.name", type: "text" },
    { name: "Stock", path: "numberInStock", type: "num" },
    { name: "Rate", path: "dailyRentalRate", type: "num" },
    { name: "", path: "liked" },
    { name: "", path: "delete" },
  ];


  handelDelete = (movie) => {
    this.setState({
      movies: this.state.movies.filter((movieX) => movieX._id !== movie._id),
      moviesNumbers: this.state.moviesNumbers - 1,
    });
  };

  handelLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handelPageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handelListGroupItemSelected = (genre) => {
    this.setState({
      currentGenre: genre,
      moviesNumbers: this.props.itemsListCount,
      currentPage: 1,
    });
  };

  handelSort = (path) => {
    const movies = [...this.state.movies];

    const orderedMovies = _.orderBy(
      movies,
      [path],
      [this.state.sortedColumn.order]
    );
    const sortedColumn = { ...this.state.sortedColumn };
    if (sortedColumn.path === path)
      sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
    else {
      sortedColumn.path = path;
      sortedColumn.order = "asc";
    }
    this.setState({ movies: orderedMovies, sortedColumn });
  };
}

export default Board;
