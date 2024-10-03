import { useContext } from 'react';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import { TodoStateContext } from '../App';
import Footer from '../components/Footer';
import usePageTitle from '../hooks/usePageTitle';

const Home = () => {
    const data = useContext(TodoStateContext);

    usePageTitle('Super Tasks - 성공의 나침반');

    return (
        <>
            <Header title={'내 할 일 목록'} />
            <TodoList data={data} />
            <Footer />
        </>
    );
};

export default Home;
