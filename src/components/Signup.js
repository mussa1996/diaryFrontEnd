import React, { useState } from 'react';
import '../App.scss';
import { connect } from 'react-redux';
import signupAction from '../actions/Signup.action'
import cogoToast from 'cogo-toast';


const Signup = (props) => {
    let [state, setState] = useState({})
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value
        })
        // console.log(state)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.signup(state)
        console.log(state)
       
    }
    if (props.signupState.success) {
    props.history.push('/todoList')
}
    if (props.signupState.errorOpen) {
        cogoToast.error(
            <div>
              <b>oops!</b>
                <div>{props.signupState.error}</div>
            </div>
          )
        }

    return (
        <div className="login-container">

            <div className="box">
                <h3>Create Account</h3>
                <form onSubmit={handleSubmit}>
                    
                    <input type="text" name="" id="email" onChange={handleChange} placeholder="Email" />
                    <input type="password" id="password" name="" onChange={handleChange} placeholder="Password" />
                    <input type="submit" name="" value="Sign up" />
                </form>
            </div>
            <div>

            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (credentials) => dispatch(signupAction(credentials))
    }
}
const mapStateToProps = (state) => {
    return {
        signupState:state.signup
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);