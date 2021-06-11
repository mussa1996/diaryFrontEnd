import Login from '../components/Login'
import Forget from '../components/Forgetpassword'
import Reset from '../components/Resetpassword'
import {  Route, Switch } from 'react-router-dom';
import Signup from '../components/Signup'
import todoList from '../components/todoList'
import ProtectedRoute from './ProtectedRoute'
import Test from "../components/Test";
import Forgetpassword from '../components/Forgetpassword';
import Resetpassword from '../components/Resetpassword';
export const Routes = () => {
    return (
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Forgetpassword" component={Forget} />
          <Route exact path="/Resetpassword" component={Reset} />
          <Route path="/signup" component={Signup} />
            {/* <Route path="/todoList" component={todoList} /> */}
            <ProtectedRoute component={todoList} path="/todoList"/>
            <ProtectedRoute component={Test} path="/test"/>
            <ProtectedRoute component={Forgetpassword} path="/forgetpassword"/>
            <ProtectedRoute component={Resetpassword} path="/resetpassword"/>
        </Switch>
    )
}