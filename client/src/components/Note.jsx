import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note({ title, content, id, onDelete }) {

  // function handleClick(){
  //   props.onDelete(props.id);
  // }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={()=>onDelete(id)}><DeleteIcon/></button>
    </div>
  );
}

export default Note;
