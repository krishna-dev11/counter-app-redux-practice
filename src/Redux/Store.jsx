import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './Slices/Counterslice'

export const store = configureStore({
  reducer: {
    counter: CounterSlice
  },
})

