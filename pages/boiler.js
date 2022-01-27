import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTodos } from '../redux/actions/boilerActions';
import Hero from '../components/base/Hero';

const BoilerScreen = () => {
  const dispatch = useDispatch();

  const boilerListReducer = useSelector((state) => state.boilerListReducer);
  const { loading, error, todos } = boilerListReducer;
  console.log(todos);

  useEffect(() => {
    dispatch(listTodos());
  }, [dispatch]);

  return (
    <div className='container'>
      <Hero
        image='https://res.cloudinary.com/harsh710/image/upload/v1641372568/namastedwaar/experiences_ezgnfz.png'
        heading='Experiences at Dwaar'
        para='  Our private living spaces have been carefully designed to integrate
            luxury with wellness. Our rustic interiors have been crafted with
            natural materials and thoughtful lighting, adorned with handcrafted
            objects, and set with furniture and bedding of exceptional comfort.'
      />
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
