import React,{useState} from 'react';
import '../App.scss';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todosActions';
import cogoToast from 'cogo-toast';
import EditTodo from '../modals/EditTodo'


const Card = ({ diary, deleteTodo,updateTodo, updateState }) => {
    const [isOpen, setIsOpen] = useState(false);

    const deleteTask = (id) => {
        console.log('========')
        deleteTodo(id)
        
    }
    
    return (
        <div key={diary._id}>
            <div className="card-container">
                <span className="card-title">{diary.title}</span>
                <p>
                  {diary.description}
                </p>
                <div className="card-button">
                    <div><input type="submit" value="delete" onClick={()=>deleteTask(diary._id)}></input></div>
                    <div><input type="submit" value="Edit" onClick={()=>setIsOpen(true)}></input></div>
            </div>
            </div>
            <EditTodo open={isOpen} onClose={() => setIsOpen(false)} todo={diary} update={ updateState} updateTodo={updateTodo}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        delete: state.delete,
        update:state.update
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTod:(id)=>dispatch(deleteTodo(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Card);