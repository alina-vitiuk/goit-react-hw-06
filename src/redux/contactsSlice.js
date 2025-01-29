import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            ...values,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const initialStateFilter = {
  name: "",
};

export const initialValues = {
  name: "",
  number: "",
};
