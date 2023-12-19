import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  urlList: [],
  activeProduct: {},
  productInfo: {},
  productHistory: []
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    updateUrlList: (state, action) => {
      state.urlList = action.payload;
    },
    setActive: (state, action) => {
      state.activeProduct = action.payload;
    },
    setProductInfo: (state, action) => {
      state.productInfo = action.payload;
    },
    setProductHistory: (state, action) => {
      state.productHistory = action.payload;
    }
  }
});

export const { updateUrlList, setActive, setProductInfo, setProductHistory } = sessionSlice.actions;

export default sessionSlice.reducer;