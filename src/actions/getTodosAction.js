import axios from 'axios';
export const GET_TODO_REQUEST='GET_TODO_REQUEST';
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
export const GET_TODO_ERROR = 'GET_TODO_ERROR';

export const getTodos = () => dispatch => {
    const token = window.localStorage.getItem('todoToken')
    dispatch({
        type:GET_TODO_REQUEST
    })

    return axios.get('http://localhost:3000/api/diary', {
        headers: {
            Authorization: `Bearer ${token}`
          }
    })
        .then(res => {
            dispatch({
                type: GET_TODO_SUCCESS,
                payload:res.data
            })
        }).catch(err => {
            dispatch({
                type: GET_TODO_ERROR,
                payload:err.message
        })
    })
}

export const searchTodo =  (title) => dispatch => {
    const token = window.localStorage.getItem('todoToken')
    dispatch({
        type:GET_TODO_REQUEST
    })

    return axios.get(`http://localhost:3000/api/diary/${title}`, {
        headers: {
            Authorization: `Bearer ${token}`
          }
    })
        .then(res => {
            dispatch({
                type: GET_TODO_SUCCESS,
                payload:res.data
            })
        }).catch(err => {
            dispatch({
                type: GET_TODO_ERROR,
                payload:err.message
        })
    })
}

export default {getTodos,searchTodo}