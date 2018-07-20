import React from 'react'
import { connect } from 'react-redux'

const Counter =(props) => {
    return <h2>Voce tem {props.todos.length} Todos</h2>
}

const mapStateToProps = state =>({
    todos: state.todos
})

export default connect(mapStateToProps)(Counter)