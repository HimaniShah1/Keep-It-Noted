import { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

const Note = ({ id, text, date, editNote, handleDeleteNote }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditedText] = useState(text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleEditChange = e => {
        setEditedText(e.target.value);
    }

    const handleEditKeyDown = e => {
        if(e.key === 'Enter'){
            editNote(id, editText);
            setIsEditing(false);
        }
    };


    return (
        <div className='note'>

            {isEditing ? (
                <input
                  id="edit-note"
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                  onKeyDown={handleEditKeyDown}
                  autoFocus
                />
            ) : (
                <span>{text}</span>
            )}
        
            <div className='note-footer'>
                <small>{date}</small>
             
                    <div className='icons'>
                        <MdEdit
                            onClick={handleEdit}
                            size='1.3em'
                        />
                        <MdDelete
                            onClick={() => handleDeleteNote(id)}
                            size='1.3em'
                        />
                    </div>
            </div>
        </div>
    );
};

export default Note;