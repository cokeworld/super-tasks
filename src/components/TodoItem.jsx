import { useNavigate } from 'react-router-dom';
import './TodoItem.css';
import Button from './Button';

const TodoItem = ({ id, title, completed, star, onCreate, onUpdate, onDelete }) => {
    const nav = useNavigate();

    return (
        <div className="TodoItem">
            <input onChange ={() => onUpdate(id, {completed: !completed})} className="item_checkbox" name="completed" type="checkbox" checked={completed ? 'checked' : ''} />
            <span className="item_title">{title}</span>
            <Button text={'수정'} />
            <Button text={'삭제'} onClick={() => onDelete(id)}/>
            <Button text={'★'} type={'STAR_POSITIVE'} />
            <Button text={'★'} type={'STAR_NEGATIVE'} />
        </div>
    );
};

export default TodoItem;
