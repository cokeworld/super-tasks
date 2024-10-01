import { useContext } from 'react';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import { TodoStateContext } from '../App';

const Home = () => {
  const data = useContext(TodoStateContext);
  console.log(data.length);
    return (
        <>
            <Header title={'내 할 일 목록'}/>
            <TodoList data={data} />
        </>
    );
};

export default Home;
