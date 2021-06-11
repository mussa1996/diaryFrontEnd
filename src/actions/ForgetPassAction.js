
import axios from 'axios';



 export const forget = (credentials) => dispatch => {
  
    return axios.put('http://localhost:3000/api/user/forgetpassword', credentials)
        .then(res => {
            localStorage.setItem('resetToken', res.data.userData.resentLink);
            console.log(res.data.userData.resentLink)
            dispatch({
                
                payload:res.data
            })
        }).catch(err => {
            if (err.response) {
                
            }
             })
}
