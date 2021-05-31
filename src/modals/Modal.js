import React, { useState } from 'react';
import '../App.scss';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import cogoToast from 'cogo-toast';

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

const Modal = ({ open, onClose, todo }) => {
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
    todo.addtodo(state)
    console.log(state)
  }
  console.log(todo.todos)
  if (todo.todos.success) {

    cogoToast.success(
      <div>
        <b>Awesome!</b>
        <div>todo added successfully?</div>
      </div>
    )
    setTimeout(() => {
      window.location.reload()
    }, 1500)
  }

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
          <input type="text" placeholder="title" id="title" onChange={handleChange}></input><br />

          <textarea placeholder="description" id="description" onChange={handleChange}></textarea>
          <input type="submit" value="create"></input>
        </form>
      </div>
    </>
  );
};


export default Modal;