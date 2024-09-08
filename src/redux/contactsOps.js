import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6525409067cfb1e59ce6f5c6.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        "https://6525409067cfb1e59ce6f5c6.mockapi.io/contacts"
      );

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "/contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { data } = await axios.delete(
        `https://6525409067cfb1e59ce6f5c6.mockapi.io/contacts/${contactId}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contacts, thunkApi) => {
    try {
      const { data } = await axios.post(
        "https://6525409067cfb1e59ce6f5c6.mockapi.io/contacts",
        contacts
      );

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
