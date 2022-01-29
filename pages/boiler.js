import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTodos } from '../redux/actions/boilerActions';
import Hero from '../components/base/Hero';

const BoilerScreen = () => {
  const dispatch = useDispatch();

  const boilerListReducer = useSelector((state) => state.boilerListReducer);
  const { loading, error, todos } = boilerListReducer;

  useEffect(() => {
    dispatch(listTodos());
  }, [dispatch]);

  return (
    <div className='container'>
      {todos.map((todo) => (
        <>
          <li>
            {todo.id} ||
            {todo.body}
          </li>
          <li>{todo.title}</li>
          <li>{todo.userId}</li>
        </>
      ))}
    </div>
  );
};

export default BoilerScreen;
