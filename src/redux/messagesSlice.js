import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  message: [],
};

export const fetchMessages = createAsyncThunk('message/fetchMessages', () => axios.get('http://127.0.0.1:3000/api/v1/messages').then((response) => response.data));

const messagesSlice = createSlice({
  name: 'message',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.message = action.payload;
    });
  },
});

export default messagesSlice.reducer;
