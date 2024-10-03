import { createContext, useReducer } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/Notfound';
import DevInfo from './pages/DevInfo';

const storedData = localStorage.getItem('storedTodoListData')
    ? JSON.parse(localStorage.getItem('storedTodoListData'))
    : [];

const reducer = (state, action) => {
    let resultState = state;
    switch (action.type) {
        case 'CREATE':
            resultState = [action.payload, ...state];
            break;
        case 'UPDATE':
            resultState = state.map((item) => (item.id === action.payload.id ? { ...item, ...action.payload } : item));
            break;
        case 'DELETE':
            resultState = state.filter((item) => item.id !== action.payload.id);
            break;
    }
    localStorage.setItem('storedTodoListData', JSON.stringify(resultState));
    return resultState;
};

export const TodoDispatchContext = createContext();
export const TodoStateContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, storedData);

    const onCreate = (todo) => {
        dispatch({ type: 'CREATE', payload: todo });
    };

    const onUpdate = (id, updateData) => {
        dispatch({ type: 'UPDATE', payload: { ...updateData, id } });
    };

    const onDelete = (id) => {
        dispatch({ type: 'DELETE', payload: { id } });
    };

    return (
        <>
            <TodoStateContext.Provider value={data}>
                <TodoDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/info" element={<DevInfo />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </>
    );
}

export default App;
