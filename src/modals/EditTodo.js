import React, { useEffect, useState } from 'react';
import '../App.scss';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import cogoToast from 'cogo-toast';
import { connect } from 'react-redux'
import {updateTodo} from '../actions/todosActions'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}
const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,.9)',
  padding: '50px',
  zIndex: 1000
}
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const EditTodo = ({ open, onClose, todo,updateTodo, update }) => {
    let [state, setState] = useState({})
    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    const handleChange = (e) => {
        setState({
          ...state,
          [e.target.id]: e.target.value
        })
    }
  const handleSubmit = (e) => {
    e.preventDefault()
    const id = todo._id
    updateTodo(id,state)
   
  }
  
  if (update.success) {

    cogoToast.success(
      <div>
        <b>Awesome!</b>
        <div>{update.message}</div>
      </div>
    )
    setTimeout(() => {
      window.location.reload()
    }, 1500)
  }
  if (update.error) {
    cogoToast.error(
      <div>
        <b></b>
        <div>{update.message}</div>
      </div>
    )
  }
    useEffect(() => {
      setState({
        title: todo.title,
        description:todo.description
        })
  },[])

  if (!open) return null;
  return (
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES} className="modal">
        <CloseModalButton
          aria-label='Close modal'
          onClick={onClose}
        />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="title" defaultValue={state.title} id="title" onChange={handleChange}></input><br />

          <textarea placeholder="description"  defaultValue={state.description} id="description" onChange={handleChange}></textarea>
          <input type="submit" value="create"></input>
        </form>
      </div>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//       update:state.delete
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//       update:({id,credentials})=>dispatch(updateTodo({id,credentials}))
//   }
// }

export default EditTodo;