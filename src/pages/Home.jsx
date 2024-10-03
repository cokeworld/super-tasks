import { useContext } from 'react';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import { TodoStateContext } from '../App';
import Footer from '../components/Footer';

const Home = () => {
    const data = useContext(TodoStateContext);
    return (
        <>
            <Header title={'내 할 일 목록'} />
            <TodoList data={data} />
            <Footer />
        </>
    );
};

export default Home;
