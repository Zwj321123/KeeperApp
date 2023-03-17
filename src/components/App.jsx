import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';

//get the nodes from the notes.js file
//map through the notes array
//for each note, create a Note component
//pass the title and content as props to the Note component
//render the Note component
function App(){
    return(
        <div>
            <Header />
            {notes.map(noteItem => (
                <Note
                    key={noteItem.key}
                    title={noteItem.title}
                    content={noteItem.content}
                />
            ))}
            <Footer />
        </div>
    );
}


export default App;