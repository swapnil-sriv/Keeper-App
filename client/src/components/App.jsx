import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [notes, setNotes] = useState([]); 
  function addNote(note){
    setNotes(prevNotes=>{
      return [...prevNotes,note];
    })
  }

  function deleteNote(id){
    setNotes(prevNotes=> {
        return prevNotes.filter((noteItem, index)=>
        index!=id)
    });
  }

  const [data,setData] = React.useState(null);
  React.useEffect(()=>{
  fetch("/api")
  .then(res=>res.json())
  .then(data=>setData(data.message));
},[]);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((anote,index)=>
      <Note title={anote.title}  key={index} id={index} content={anote.content} onDelete={deleteNote} />)}
      <Footer />
    </div>
  );
}

export default App;
