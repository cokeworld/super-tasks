import { useNavigate } from 'react-router-dom';
import './TodoItem.css';
import Button from './Button';

const TodoItem = ({ id, title, completed, star, onCreate, onUpdate }) => {
    // TODO: 버튼 클릭에 따른 동작 구현
    
    const nav = useNavigate();

    const onClickDelete = () => {

    }
    return (
        <li className='TodoItem'>
            <input name="completed" type="checkbox" checked={completed ? 'checked' : ''} />
            <span className='item_title'>{title}</span>
            <Button text={'수정'} />
            <Button text={'삭제'} />
            <Button text={'별표'} />
        </li>
    );
};

export default TodoItem;
