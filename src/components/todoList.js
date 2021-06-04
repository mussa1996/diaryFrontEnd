import React, { useState, useEffect } from "react";
import Card from "./Card";
import Modal from "../modals/Modal";
import { connect } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../actions/todosActions";
import {getTodos, searchTodo} from "../actions/getTodosAction";
import "../App.scss";
import cogoToast from "cogo-toast";
import { logout } from "../actions/LoginAction";
let searchKeyword;


const TodoList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    props.getTodos();
  }, [searchTerm]);

  if (props.delete.success) {
    cogoToast.success(
      <div>
        <b>Awesome!</b>
        <div>todo deleted successfully?</div>
      </div>
    );
    window.location.reload();
  }
  return (
    <div div className="todo-container">
      <div className="todos-header">
        <h1>Todos</h1>
        <div className="todolist-btn">
          <div>
            <input
              type="submit"
              value="ADD TODO"
              onClick={() => setIsOpen(true)}
            ></input>
          </div>
          <div>
            <input
              type="submit"
              value="LOGOUT"
              onClick={() => {
                localStorage.removeItem("todoToken");
                window.location.reload();
              }}
            ></input>
          </div>
          <div>
            <input
              id="searchKeyword"
              value={searchKeyword}
              type="text"
              placeholder="search ..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            ></input>
            {props.myTodos.diary
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, key) => {
                return (
                  <div>
                    {/* <p>{val.title}</p> */}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="todos-section">
        { props.myTodos.pending ? (
          <h2>diary loading...</h2>
        ) : props.myTodos.error ? (
          <h3>Error</h3>
        ) : 
        props.myTodos.diary
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, key) => {
                return (
                  <div>
                  <Card
                diary={val}
                updateState={props.update}
                deleteTodo={props.deleteTodo}
                updateTodo={props.updateTodo}
              />
                   
                    
                  </div>
                );
              })}
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} todo={props} />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addtodo: (datas) => dispatch(addTodo(datas)),
    getTodos: () => dispatch(getTodos()),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    updateTodo: (id, credentials) => dispatch(updateTodo(id, credentials)),
    logout: () => dispatch(logout()),
  };
};
const mapStateToProps = (state) => ({
  todos: state.todos,
  myTodos: state.myTodos,
  delete: state.delete,
  update: state.update,
  login: state.login,
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
