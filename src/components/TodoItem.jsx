import './TodoItem.css';
import Button from './Button';
import { useEffect, useRef, useState } from 'react';

const TodoItem = ({ id, title, completed, star, editingId, onClickEditTitle, onUpdate, onDelete }) => {
    const isEdittingMode = id === editingId;
    const [editTitle, setEditTitle] = useState(title);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEdittingMode) {
            inputRef.current.focus();
        }
    }, [isEdittingMode]);

    return (
        <div className="TodoItem">
            <input
                onChange={() => onUpdate(id, { completed: !completed })}
                className="item_checkbox"
                name="completed"
                type="checkbox"
                checked={completed ? 'checked' : ''}
            />

            {isEdittingMode ? (
                <>
                    <input
                        type="text"
                        value={editTitle}
                        className="item_title"
                        ref={inputRef}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <Button text={'수정완료'} type={'POSITIVE'} onClick={() => onUpdate(id, { title: editTitle })} />
                </>
            ) : (
                <>
                    <span onClick={() => onClickEditTitle(id)} className="item_title">
                        {title}
                    </span>
                </>
            )}
            <Button
                text={'★'}
                onClick={() => onUpdate(id, { star: !star })}
                type={`STAR_${star ? 'POSITIVE' : 'NEGATIVE'}`}
            />
            <Button text={'×'} type={'DELETE'} onClick={() => onDelete(id)} />
        </div>
    );
};

export default TodoItem;
