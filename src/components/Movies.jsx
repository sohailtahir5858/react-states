import React, { Component } from "react";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      setTotalCount: props.setTotalCount
    };
  }

  handleDeleteMovie = (movie) => {
    console.log(movie);
    let movies = this.state.movies.filter((item) => movie._id !== item._id);
    this.setState({ movies: movies });
    this.state.setTotalCount(this.state.movies)
  };
  render() {
    return (
      <>
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <th scope="row">{movie._id}</th>
                <th>{movie.title}</th>
                <td>-</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDeleteMovie(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
