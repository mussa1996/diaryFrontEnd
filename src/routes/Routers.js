import Login from '../components/Login'
import {  Route, Switch } from 'react-router-dom';
import Signup from '../components/Signup'
import todoList from '../components/todoList'
import ProtectedRoute from './ProtectedRoute'
import Test from "../components/Test";

export const Routes = () => {
    return (
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
            {/* <Route path="/todoList" component={todoList} /> */}
            <ProtectedRoute component={todoList} path="/todoList"/>
            <ProtectedRoute component={Test} path="/test"/>
        </Switch>
    )
}