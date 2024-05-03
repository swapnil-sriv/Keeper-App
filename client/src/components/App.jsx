import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  const [data,setData] = React.useState(null);
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
  
  React.useEffect(() => {
    fetch('http://localhost:3000/api')
     .then(res => res.json())
     .then(data => setNotes(data));
  }, []);
  
  

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note,index)=>
      <Note title={note.title}  key={index} id={index} content={note.content} onDelete={deleteNote} />)}
      <Footer />
    </div>
  );
}

export default App;
