import { combineReducers } from 'redux'
import signupReducer from './Signup.reducer'
import {addTodoReducer,deleteTodo,updateTodo} from './todosReducer'
import getTodosReducer from './getTodosReducer'
import LoginReducer from './LoginReducer'


 const rootReducer =combineReducers({
    signup: signupReducer,
    todos: addTodoReducer,
    login: LoginReducer,
    myTodos: getTodosReducer,
    delete: deleteTodo,
    update:updateTodo
 })

 export default rootReducer