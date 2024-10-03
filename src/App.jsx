import { createContext, useReducer } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/Notfound';
import New from './pages/New';
import Edit from './pages/Edit';

const mockData = [
    {
        id: 1,
        title: 'Todo 1',
        createdData: new Date().getTime() + 1,
        completed: false,
        star: true
    },
    {
        id: 2,
        title: 'true',
        createdData: new Date().getTime() + 2,
        completed: false,
        star: false
    },
    {
        id: 3,
        title: 'Todo 3',
        createdData: new Date().getTime() + 3,
        completed: false,
        star: false
    },
    {
        id: 4,
        title: 'Todo 4',
        createdData: new Date().getTime() + 4,
        completed: false,
        star: false
    },
    {
        id: 5,
        title: 'Todo 5',
        createdData: new Date().getTime() + 5,
        completed: false,
        star: false
    }
];

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
    return resultState;
};

export const TodoDispatchContext = createContext();
export const TodoStateContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);

    const onCreate = (todo) => {
        dispatch({ type: 'CREATE', payload: todo });
    };

    const onUpdate = (id, updateData) => {
        console.log('onUpdate', updateData);
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
                        <Route path="/new" element={<New />} />
                        <Route path="/edit/:id" element={<Edit />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </>
    );
}

export default App;
