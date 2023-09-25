import React from "react";

function Note(props) {
  return (
    <div className="note">
       <h1 >{props.t}</h1>
        <p>{props.c}</p>
    </div>
  );
}

export default Note;
