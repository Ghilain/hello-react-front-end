import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../redux/messagesSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.message);

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  return message.greeting ? <h1>{message.greeting}</h1> : null;
};

export default Greeting;
