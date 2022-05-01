import React from "react";

export default function Card(props) {
  return (
    <div class="card">
      <div class="card-body">
        <img src={props.icon} alt="img" />
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text"> Rank : {props.rank}</p>
        <a class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}
