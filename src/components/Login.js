import React,{useState} from 'react';
import '../App.scss';
import {Link} from 'react-router-dom'
import {signin} from '../actions/LoginAction'
import { connect } from 'react-redux'
import cogoToast from 'cogo-toast';

const Login = (props) => {
    let [state, setState] = useState({})
    const token  =localStorage.getItem('todoToken')
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.signIn(state)
        if (props.login.error) {
            cogoToast.error(
                <div>
                  <b>oops!</b>
                    <div>{props.login.message}</div>
                </div>
              )
            }
    }
    if (props.login.success||token) {
        props.history.push('/todoList')
    }
    

    return (
        <div className="login-container">
            
            <div className="box">
            <h3>Login to your Account</h3>
                <form onSubmit={handleSubmit}>
                <input type="text" id="email" name="" onChange={handleChange} placeholder="Email" />
                <input type="password" id="password" onChange={handleChange} name="" placeholder="Password" />
                <input type="submit" name="" value="Login" />
                <p>Don't have an account? <Link to="/signup">Register</Link></p>
               </form>
            </div>
            <div>

            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (Credential)=>dispatch(signin(Credential))
    }
}
const mapStateToProps = (state) => {
    return {
        login:state.login
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Login);