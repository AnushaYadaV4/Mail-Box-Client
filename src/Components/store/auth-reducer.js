import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { mailToken: localStorage.getItem("mailBoxToken") , MailBoxId:JSON.parse(localStorage.getItem('mailBoxId'))};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setToken(state, action) {
      localStorage.setItem("mailBoxToken", action.payload);
      state.mailToken = action.payload;
    },
    removeExpenseToken(state) {
      state.token = null;
      localStorage.removeItem('mailBoxToken')
    },
    setEmailId(state,action)
    {
      localStorage.setItem('mailBoxId',JSON.stringify(action.payload));
      state.MailBoxId=action.payload;
    },
    removeUserEmail(state)
    {
      state.MailBoxId='';
      localStorage.removeItem('mailBoxId')
    }

  },
});

export const authAction=authSlice.actions;
export default authSlice.reducer;