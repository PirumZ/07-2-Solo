import React from "react";
import './Movie.css';



/*Movie component with the title, director, and stars data*/
export default function Movie(props) {
  return (
    <div className="movie">
      <div className="movie-title"><b>Movie Title: {props.title}</b></div>
      <div className="director">Director: <b>{props.director}</b></div>
      <div className="stars">Stars: {props.stars}</div>
    </div>
  )
}