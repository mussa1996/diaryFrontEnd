import { GET_TODO_ERROR, GET_TODO_REQUEST, GET_TODO_SUCCESS } from '../actions/getTodosAction'


const initialState = {
    success: false,
    diary:[],
    error: '',
    pending:false
}

const getTodosReducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_TODO_REQUEST:
            return {
                ...state,
                pending:true
            }
        case GET_TODO_SUCCESS:
            return {
                ...state,
                pending: false,
                success:true,
                diary:action.payload.diary
            }
        case GET_TODO_ERROR:
            return {
                ...state,
                pending: false,
                success: false,
                error:action.payload
            }
        default:
            return state
    }
};

export default getTodosReducer;