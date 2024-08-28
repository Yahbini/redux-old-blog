import { configureStore } from '@reduxjs/toolkit'
import blogReducer from 'pages/blog/blog.slice'

export const store = configureStore({
  reducer: {
    blogContent: blogReducer
  }
})

// Lấy RootState và AppDispatch từ store của chúng ta
// phục vụ cho typescript
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
