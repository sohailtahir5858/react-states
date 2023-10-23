import React from "react";

function Table({ movies, deleteMovie }) {
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
            {movies.map((movie) => ( 
                <tr key={movie._id}>
                <th scope="row">{movie._id}</th>
                <th >{movie.title}</th>
                <td>-</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteMovie(movie._id)}>Delete</button>
                </td>
              </tr>
            ))}
          
        </tbody>
      </table>
    </>
  );
}

export default Table;
