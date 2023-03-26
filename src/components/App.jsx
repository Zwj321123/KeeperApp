import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';


function App(props){
    //create a useState hook to store the notes, initial value is an empty array
    const [notesList, setNotesList] = useState([]);

    //create a function to add a note to the notesList
    function addNote(note){
        setNotesList(prevNotes => {
            return [...prevNotes, note];
        });
    }

    //create a function to delete a note from the notesList
    function deleteNote(id){
        setNotesList(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return(
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notesList.map((noteItem, index) => (
                <Note onDelete={deleteNote}
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                />
            ))}
            <Footer />
        </div>
    );
}


export default App;