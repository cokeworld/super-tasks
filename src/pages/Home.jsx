import { useContext } from 'react';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import { TodoStateContext } from '../App';
import Footer from '../components/Footer';
import usePageTitle from '../hooks/usePageTitle';
import { getServiceTitle } from '../util/get-service-title';

const Home = () => {
    const data = useContext(TodoStateContext);
    usePageTitle(`${getServiceTitle()} - 성공의 나침반`);

    return (
        <>
            <Header title={'내 할 일 목록'} />
            <TodoList data={data} />
            <Footer />
        </>
    );
};

export default Home;
