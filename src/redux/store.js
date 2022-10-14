import { configureStore } from '@reduxjs/toolkit';
import messagesSlice from './messagesSlice';

const store = configureStore({
  reducer: {
    message: messagesSlice,
  },
});

export default store;
