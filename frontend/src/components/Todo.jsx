const Todo = ({ id, text, deleteTodo }) => {

    return <div className="flex justify-between bg-gray-200 hover:bg-gray-300 mx-2 my-2">
        <p className="mx-3 px-3 py-2">{text}</p>
        <div className="flex">
            {/* <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-1 rounded">Edit</button> */}
            <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-1 rounded" onClick={() => deleteTodo(id)}>Delete</button>
        </div>
    </div>
}

export default Todo