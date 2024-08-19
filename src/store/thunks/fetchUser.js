import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/user');

  await pause(1000); // Simulate delay for development
  return response.data;
});

//Dev Only

const pause  = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
}

export { fetchUsers };