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

  async function deleteNote(id){
    // setNotes(prevNotes=> {
    //     return prevNotes.filter((noteItem, index)=>
    //     index!=id)
    // });
    await fetch(`http://localhost:3000/Notedown/${id}`, {
      method:'DELETE'
    });
    setNotes(notes.filter(note=>note.id!==id));

  } 
  
  React.useEffect(() => {
    fetch('http://localhost:3000/Notedown/notes')
     .then(res => res.json())
     .then(data => setNotes(data));
  }, []);
  

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note,index)=>
      <Note title={note.title}  key={note.id} id={note.id} content={note.ncontent} onDelete={()=>deleteNote(note.id)} />)}
      <Footer />
    </div>
  );
}

export default App;
