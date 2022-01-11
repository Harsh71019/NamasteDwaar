import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTodos } from '../redux/actions/boilerActions';

const BoilerScreen = () => {
  const dispatch = useDispatch();

  const boilerListReducer = useSelector((state) => state.boilerListReducer);
  const { loading, error, todos } = boilerListReducer;
  console.log(todos);

  useEffect(() => {
    dispatch(listTodos());
  }, [dispatch]);

  return (
    <div>
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
