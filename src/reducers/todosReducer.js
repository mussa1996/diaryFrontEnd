import { ADD_TODO_ERROR, ADD_TODO_REQUEST, ADD_TODO_SUCCESS,DELETE_TODO_ERROR,
DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS,UPDATE_TODO_ERROR,UPDATE_TODO_REQUEST,UPDATE_TODO_SUCCESS } from '../actions/todosActions'

const initialState = {
    success: false,
    error: null,
    pending:false
}
const initState = {
    success: false,
    error: false,
    pending: false,
    message:''
}
const updateState = {
    success: false,
    error: false,
    pending: false,
    message:''
}

 export const addTodoReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO_REQUEST:
            return {
                ...state,
                pending:true
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                pending: false,
                success:true
            }
        case ADD_TODO_ERROR:
            return {
                ...state,
                success: false,
                error:action.payload
            }
        default:
            return state
    }
}

export const deleteTodo = (state=initState, action) => {
    switch (action.type) {
        case DELETE_TODO_ERROR:
            return {
                ...state,
                success: false,
                message: action.payload,
                pending: false,
                error:true
            }
        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                success: true,
                message: action.payload,
                pending: false,
                error:false
            }
        case DELETE_TODO_REQUEST:
            return {
                ...state,
                success: false,
                pending: true,
                error:false
            }
        default:
            return state
    }
}
export const updateTodo = (state=updateState, action) => {
    switch (action.type) {
        case UPDATE_TODO_ERROR:
            return {
                ...state,
                success: false,
                message: action.payload,
                pending: false,
                error:true
            }
        case UPDATE_TODO_SUCCESS:
            return {
                ...state,
                success: true,
                pending: false,
                error: false,
                message:action.payload.message
            }
        case UPDATE_TODO_REQUEST:
            return {
                ...state,
                success: false,
                pending: true,
                error:false
            }
        default:
            return state
    }
}