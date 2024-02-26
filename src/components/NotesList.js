import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
    notes,
    handleAddNote,
    handleDeleteNote,
    editNote
}) => {
    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    editNote={editNote}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;