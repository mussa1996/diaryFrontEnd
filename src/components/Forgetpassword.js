
import React,{useState} from 'react';
import '../App.scss';
import {Link} from 'react-router-dom'
import {forget} from '../actions/ForgetPassAction'
import { connect } from 'react-redux'
import cogoToast from 'cogo-toast';
import { data } from 'jquery';

const Forget = (props) => {
    let [state, setState] = useState({})
    const token  =localStorage.getItem('resetToken')
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.forGet(state)
        
    }
   

    return (
        <div className="login-container">
            
            <div className="box">
            <h3>Forget Password</h3>
                <form onSubmit={handleSubmit}>
                <input type="text" id="email" name="" onChange={handleChange} placeholder="Email" />
                
                <input type="submit" name="" value="Submit" />
               
               </form>
            </div>
            <div>

            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        forGet: (Credential)=>dispatch(forget(Credential))
    }
}
const mapStateToProps = (state) => {
    return {
        login:state.login
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Forget);