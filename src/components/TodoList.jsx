import { useNavigate } from 'react-router-dom';
import Button from './Button';
import TodoItem from './TodoItem';
import './TodoList.css';
import { useContext, useRef, useState } from 'react';
import { TodoDispatchContext } from '../App';

const TodoList = ({ data }) => {
    //TODO: 셀렉트박스 변경에 따른 정렬 구현

    const { onCreate, onUpdate, onDelete } = useContext(TodoDispatchContext);
    const [sortType, setSortType] = useState('newest');

    // TODO: data의 크기에 따라 초기화
    const idRef = useRef(data.length + 1);

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

    const onClickCreate = () => {
        onCreate({
            id: idRef.current++,
            title: newInput.value,
            createdData: new Date().getTime(),
            completed: false,
            star: false
        });

        setNewInput({ ...newInput, value: '' });
    };

    const onClickUpdate = (id, updateData) => {
        onUpdate(id, updateData);
    };

    const onClickDelete = (id) => {
        if (confirm('삭제하시겠습니까?')) {
            onDelete(id);
        }
    };

    const onChangeSortType = (e) => {
        console.log(e.target.value);
        const sortType = e.target.value;
        setSortType(sortType);
    };

    const nav = useNavigate();

    let filteredData = [];
    switch (sortType) {
        case 'newest':
            filteredData = data.filter((item) => !item.completed).sort((a, b) => b.createdData - a.createdData);
            break;
        case 'oldest':
            filteredData = data.filter((item) => !item.completed).sort((a, b) => a.createdData - b.createdData);
            break;
        case 'completed':
            filteredData = data.filter((item) => item.completed).sort((a, b) => b.createdData - a.createdData);
            break;
        case 'star':
            filteredData = data.filter((item) => !item.completed && item.star).sort((a, b) => b.createdData - a.createdData);
            break;
        default:
            filteredData = data.filter((item) => !item.completed).sort((a, b) => b.createdData - a.createdData);
    }

    return (
        <div className="TodoList">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={'newest'}>최근 순</option>
                    <option value={'oldest'}>오래된 순</option>
                    <option value={'completed'}>완료된 할 일</option>
                    <option value={'star'}>별표 표시 할 일</option>
                </select>
                <Button onClick={onClickToggleNewInput} text={'할 일 추가'} type={'POSITIVE'} />
            </div>
            <div className="newInputArea">
                {newInput.show ? (
                    <>
                        <input onChange={onChangeNewInput} type="text" value={newInput.value} />{' '}
                        <Button onClick={() => onClickCreate()} text={'추가 완료'} type={'POSITIVE'} />
                    </>
                ) : (
                    ''
                )}
            </div>
            <div>
                {filteredData.map((item) => (
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        completed={item.completed}
                        onUpdate={onClickUpdate}
                        onDelete={onClickDelete}
                    />
                ))}
            </div>
        </div>
    );
};
export default TodoList;
