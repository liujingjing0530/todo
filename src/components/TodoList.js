import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as types from '../store/action-types';
class TodoList extends Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.todos.map((item,index)=>(
                        <li key={index} className="list-group-item">
                            <input type="checkbox"/>
                            {item.title}
                            <span className="pull-right">
                                <button className="btn btn-danger">X</button>
                            </span>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
export default connect(
    state=>{{todos:state.todos}},
    dispatch=>(
        {}
        )

)(TodoList);