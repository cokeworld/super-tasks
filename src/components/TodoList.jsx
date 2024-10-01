import { useNavigate } from 'react-router-dom';
import Button from './Button';
import TodoItem from './TodoItem';
import './TodoList.css';
import { useContext, useRef, useState } from 'react';
import { TodoDispatchContext } from '../App';

const TodoList = ({ data }) => {
    //TODO: 셀렉트박스 변경에 따른 정렬 구현

    const { onCreate } = useContext(TodoDispatchContext);
    const idRef = useRef(4);

    const [newInput, setNewInput] = useState({ value: '', show: false });

    const onClickToggleNewInput = () => {
        console.log('할 일 추가');
        const changeShow = !newInput.show;
        setNewInput({ ...newInput, show: changeShow });
    };

    const onChangeNewInput = (e) => {
        console.log(e.target.value);

        setNewInput({ ...newInput, value: e.target.value });
    };

    const onClickSubmit = () => {
        console.log('onClickSubmit');

        onCreate({
            id: idRef.current++,
            title: newInput.value,
            createdData: new Date().getTime(),
            completed: false,
            star: false
        });
    };

    const nav = useNavigate();
    return (
        <div className="TodoList">
            <div className="menu_bar">
                {/* <select onChange={onChangeSortType}> */}
                <select>
                    <option value={'newest'}>최근 순</option>
                    <option value={'oldest'}>오래된 순</option>
                    <option value={'complete'}>완료된 할 일</option>
                </select>
                <Button onClick={onClickToggleNewInput} text={'할 일 추가'} type={'POSITIVE'} />
            </div>
            <div className="newInputArea">
                {newInput.show ? (
                    <>
                        <input onChange={onChangeNewInput} type="text" value={newInput.value} />{' '}
                        <Button onClick={() => onClickSubmit()} text={'완료'} type={'POSITIVE'} />
                    </>
                ) : (
                    ''
                )}
            </div>
            <ul>
                {data.map((item) => (
                    <TodoItem key={item.id} id={item.id} title={item.title} completed={item.completed} />
                ))}
            </ul>
        </div>
    );
};
export default TodoList;
