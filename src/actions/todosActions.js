import axios from 'axios';
export const ADD_TODO_REQUEST='ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_ERROR='ADD_TODO_ERROR';
export const DELETE_TODO_REQUEST='DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_ERROR='DELETE_TODO_ERROR';
export const UPDATE_TODO_REQUEST='UPDATE_TODO_REQUEST';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_ERROR='UPDATE_TODO_ERROR';


 export const addTodo = (datas) => dispatch => {
    const token = window.localStorage.getItem('todoToken')
    dispatch({
       type: ADD_TODO_REQUEST
    })
     return axios.post('http://localhost:3000/api/diary', datas, {
        headers: {
            Authorization: `Bearer ${token}`
          }
    })
        .then(res => {
            dispatch({
                type: ADD_TODO_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: ADD_TODO_ERROR,
                payload: err
            })
        })
}

export const deleteTodo = (id) =>dispatch=> {
    const token = window.localStorage.getItem('todoToken')
    dispatch({
        type: DELETE_TODO_REQUEST
     })
      return axios.delete(`http://localhost:3000/api/diary/${id}`, {
         headers: {
             Authorization: `Bearer ${token}`
           }
     })
         .then(res => {
             
             dispatch({
                 type: DELETE_TODO_SUCCESS,
                 payload: res.data.message
             })
         }).catch(err => {
             dispatch({
                 type: DELETE_TODO_ERROR,
                 payload: err
             })
         })
}
export const updateTodo = (id,credentials) =>dispatch=> {
    const token = window.localStorage.getItem('todoToken')
    dispatch({
        type: UPDATE_TODO_REQUEST
     })
     
      return axios.patch(`http://localhost:3000/api/diary/${id}`,credentials, {
         headers: {
             Authorization: `Bearer ${token}`
           }
     })
          .then(res => {
             console.log("=========",credentials)
             dispatch({
                 type: UPDATE_TODO_SUCCESS,
                 payload: res.data
             })
          }).catch(err => {
            console.log("++++++++",credentials)
             dispatch({
                 type: UPDATE_TODO_ERROR,
                 payload: err
             })
         })
}