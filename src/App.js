import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '1/8/2024',
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '1/9/2024',
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '1/9/2024',
    },
    {
      id: nanoid(),
      text: 'This is a new note!',
      date: '1/10/2024',
    },
  ]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const editNote = (id, newText) => {
    setNotes(notes.map(note => {
      if(note.id === id){
        return {...note, text: newText}
      }
      return note;
    }))
  }
  

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className='container'>
      <Header />
      <Search handleSearchNote={setSearchText} />
      
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          editNote={editNote}
        />
     
    </div>
  );
};

export default App;