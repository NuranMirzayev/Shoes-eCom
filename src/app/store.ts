import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import cartReducer from '../features/ShoppingCart/CartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>( )
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
