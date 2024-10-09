import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../feacturs/todo/todoSlice'

export const store =configureStore( {
    reducer:todoReducer
} )