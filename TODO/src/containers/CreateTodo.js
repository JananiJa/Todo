import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actionCreator'
import {bindActionCreators} from 'redux'

class CreateTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            todotext: '',
        }
        this.onChangeTodoText = this.onChangeTodoText.bind(this)
    }

    onChangeTodoText(e){
        this.setState({
            todotext: e.target.value
        })
    }
    render(){
        return (
                  <div>
                    <div>
                      <input 
                      onChange={this.onChangeTodoText} 
                      value={this.state.todotext} 
                      type="text" 
                      className="form-control" 
                      id="input" 
                      placeholder="Add ToDo here"/>
                      
                      <button 
                      type="button" 
                      onClick={() =>{ this.state.todotext === '' ? this.setState({ todotext: '' }) : this.props.addTodo(this.state.todotext); this.setState({ todotext: '' })}  }
                      style={{marginTop: "25px", marginRight: "25px"}} 
                      className={this.state.todotext === '' ?"btn btn-disabled btn-md" : "btn btn-md btn-success"}>
                          Add Todo
                          </button>
                      <button 
                      type="button" 
                      onClick={ () => this.setState({ todotext: '' }) } 
                      style={{marginTop: "25px"}} 
                      className= 'btn btn-danger btn-md'>
                          Cancel
                          </button>
                    </div>
                  </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}


export default connect(null, mapDispatchToProps)(CreateTodo)