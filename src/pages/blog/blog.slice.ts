import { createAction, createReducer, createSlice, current, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { initialPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
  editingPost: Post | null
}

const initialState: BlogState = {
  postList: initialPostList,
  editingPost: null
}

// createSlice
const blogSlice = createSlice({
  name: 'blogContentSlice',
  initialState,
  reducers: {
    deletePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
      if (foundPostIndex !== -1) {
        state.postList.splice(foundPostIndex, 1)
      }
    },
    startEditingPost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    },
    cancelEditingPost: (state) => {
      state.editingPost = null
    },
    finishEditingPost: (state, action: PayloadAction<Post>) => {
      const postId = action.payload.id
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload
          return true
        }
        return false
      })
      //reset 2 button về publish Post
      state.editingPost = null
    },
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        // immerjs: giúp mutate một state an toàn
        const post = action.payload
        state.postList.push(post)
      },
      prepare: (post: Omit<Post, 'id'>) => ({
        payload: {
          ...post,
          id: nanoid()
        }
      })
    }
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        (action) => action.type.includes('cancel'),
        (state, action) => {
          console.log("cancel", current(state))
        }
      )
      .addDefaultCase((state, action) => {
        console.log(`action type: ${action.type}`, current(state))
      })
  }
})

export const { addPost, finishEditingPost, cancelEditingPost, startEditingPost, deletePost } = blogSlice.actions
const BlogSlice = blogSlice.reducer

export default BlogSlice

// create reducer && createAction

// dùng bth
// export const addPost = createAction<Post>('blogContent/addPost')

//  dùng prepare callback
// export const addPost = createAction('blog/addPost', function (post: Omit<Post, 'id'>) {
//   return {
//     payload: {
//       ...post,
//       id: nanoid()
//     }
//   }
// })
// export const deletePost = createAction<string>('blogContent/deletePost')
// /**
//   * Làm edit
//     B1: show from data hiện tại + xuất hiện thêm button update và cancel ở Form
//     cần state để biết đang trong trạng thái edit để  là show data ở form và button
//     B2: ở CreatePost hiện value trên formData và button
//     B3: Cập nhật lại state cho update post
// */
// export const startEditingPost = createAction<string>('blogContent/startEditingPost')
// export const cancelEditingPost = createAction('blogContent/cancelEditingPost')
// export const finishEditingPost = createAction<Post>('blogContent/finishEditingPost')

// const blogReducer = createReducer(initialState, (builder) => {
//   // * xử lí action và update state
//   // add post
//   builder
//     .addCase(addPost, (state, action) => {
//       // immerjs: giúp mutate một state an toàn
//       const post = action.payload
//       state.postList.push(post)
//     })
//     .addCase(deletePost, (state, action) => {
//       console.log('start ', current(state))

//       const postId = action.payload
//       const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
//       if (foundPostIndex !== -1) {
//         state.postList.splice(foundPostIndex, 1)
//       }
//       console.log('finish ', current(state))
//     })
//     // B1
//     .addCase(startEditingPost, (state, action) => {
//       const postId = action.payload
//       const foundPost = state.postList.find((post) => post.id === postId) || null
//       state.editingPost = foundPost
//     })
//     .addCase(cancelEditingPost, (state) => {
//       state.editingPost = null
//     })
//     .addCase(finishEditingPost, (state, action) => {
//       const postId = action.payload.id
//       state.postList.some((post, index) => {
//         if (post.id === postId) {
//           state.postList[index] = action.payload
//           return true
//         }
//         return false
//       })
//       //reset 2 button về publish Post
//       state.editingPost = null
//     })

//     // addMatcher: cho phép thêm 'matcher function'
//     // nếu matcher function return true thì nó sẽ nhảy vào case
//     .addMatcher(
//       (action) => action.type.includes('cancel'),
//       (state, action) => {
//         console.log(current(state))
//       }
//     )
// })

// export default blogReducer
