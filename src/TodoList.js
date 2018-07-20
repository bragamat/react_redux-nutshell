import React, { Component } from 'react'
import * as todoActions from './actions/todos'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TodoList extends Component {
    constructor(props){
        super(props)
        console.log(props)
        
        this.state ={
            newTodoText: ''
        }

    }
    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText)

        this.setState({ newTodoText: ''})
    }
    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map((todo, index)=>{
                       return <li key={index}>{todo.text}</li>
                    })}
                    
                </ul>

                <input type="text" value={this.state.newTodoText}
                onChange={(e)=> this.setState({
                    newTodoText: e.target.value
                })} autoFocus="true"/>
                <button onClick={this.addNewTodo}>Novo Todo</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)