import axios from 'axios';


 export const reset = (credentials) => dispatch => {
    
    return axios.put('http://localhost:3000/api/user/resetPassword', credentials)
        .then(res => {
            localStorage.getItem('resetToken');
           
        }).catch(err => {
            if (err.response) {
                
            }
             })
}
