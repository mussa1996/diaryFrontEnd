import React,{useState} from 'react';
import '../App.scss';
import {Link} from 'react-router-dom'
import {reset} from '../actions/ResetPasswordAction'
import { connect } from 'react-redux'
import cogoToast from 'cogo-toast';

import axios from 'axios';

const Reset = (props) => {
    let [state, setState] = useState({newPassword:'',resentLink:''})
    
    const token  =localStorage.getItem('resetToken')
    const handleChange = (e) => {
        setState({
           newPassword:e.target.value,
           resentLink:token
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.resetp(state)
        console.log(state)
        
        if (props.reset||token) {
            props.history.push('/')
        }
       
    }
    
    

    return (
        <div className="login-container">
            
            <div className="box">
            <h3>Reset Password</h3>
                <form onSubmit={handleSubmit}>
                <input type="password" id="password" onChange={handleChange} name="" placeholder="NewPassword" />
                
                <input type="submit" name="" value="ResetPassword" />
               
               </form>
            </div>
            <div>

            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetp: (Credential)=>dispatch(reset(Credential))
    }
}
const mapStateToProps = (state) => {
    return {
        login:state.login
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Reset);


