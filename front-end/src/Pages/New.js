import React from "react";
import NewPost from "../Components/NewPost";

export default function New() {
  return (
    <div className="New page">
      <header>
        <h2>Make a new post.</h2>
      </header>
      <hr></hr>
      < NewPost/>
    </div>
  );
}