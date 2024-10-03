import { useNavigate } from 'react-router-dom';
import Button from './Button';
import TodoItem from './TodoItem';
import './TodoList.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { TodoDispatchContext } from '../App';

const TodoList = ({ data }) => {
    const { onCreate, onUpdate, onDelete } = useContext(TodoDispatchContext);
    const [sortType, setSortType] = useState('newest');
    const [filteredData, setFilteredData] = useState(data);
    const [editingId, setEditingId] = useState(0);

    const idRef = useRef(data.length + 1);

    const [newInput, setNewInput] = useState({ value: '', show: false });

    const onClickToggleNewInput = () => {
        const changeShow = !newInput.show;
        setNewInput({ ...newInput, show: changeShow });
    };

    const onChangeNewInput = (e) => {
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
        setSortType(e.target.value);
    };

    const onClickEditTitle = (id) => {
        setEditingId(id);
    };

    const nav = useNavigate();

    useEffect(() => {
        let filteredDataTemp = [];
        switch (sortType) {
            case 'newest':
                filteredDataTemp = data.filter((item) => !item.completed).sort((a, b) => b.createdData - a.createdData);
                break;
            case 'oldest':
                filteredDataTemp = data.filter((item) => !item.completed).sort((a, b) => a.createdData - b.createdData);
                break;
            case 'completed':
                filteredDataTemp = data.filter((item) => item.completed).sort((a, b) => b.createdData - a.createdData);
                break;
            case 'star':
                filteredDataTemp = data
                    .filter((item) => !item.completed && item.star)
                    .sort((a, b) => b.createdData - a.createdData);
                break;
            default:
                filteredDataTemp = data.filter((item) => !item.completed).sort((a, b) => b.createdData - a.createdData);
        }
        setFilteredData(filteredDataTemp);
    }, [sortType, data]);

    useEffect(() => {
        setEditingId(0);
    }, [filteredData]);

    return (
        <div className="TodoList">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={'newest'}>최근 순</option>
                    <option value={'oldest'}>오래된 순</option>
                    <option value={'star'}>별표 표시 할 일</option>
                    <option value={'completed'}>완료된 할 일</option>
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
                {filteredData.length ? (
                    <>
                        {filteredData.map((item) => (
                            <TodoItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                completed={item.completed}
                                star={item.star}
                                editingId={editingId}
                                onClickEditTitle={onClickEditTitle}
                                onUpdate={onClickUpdate}
                                onDelete={onClickDelete}
                            />
                        ))}
                    </>
                ) : (
                    <div className="noData">
                        <p>할 일이 없어요.</p>
                        <p>할 일 추가해볼까요?</p>
                        <p>😀</p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default TodoList;
