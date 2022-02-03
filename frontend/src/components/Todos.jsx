import Todo from './Todo'

const Todos = ({ todos, deleteTodo }) => {
    return <div className='w-9/12 mx-auto'>
        {todos.map(todo => {return <Todo key={todo.id} id={todo.id} text={todo.text} deleteTodo={deleteTodo}/>})}
    </div>
}

export default Todos