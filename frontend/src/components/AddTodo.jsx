import { useState } from 'react'

const AddTodo = ({ addTodo }) => {
    const [text, setText] = useState("")

    const onSubmit = e => {
        e.preventDefault()
        if (text.length > 0)
            addTodo(text)
        setText("")
    }

    return <div className='my-2'>
        <form onSubmit={onSubmit}>
            <input className='w-8/12 bg-gray-200 border-solid border-2 border-gray-200 rounded mx-4 my-1 px-2 py-1' type="text" placeholder="Enter text" value={text} onChange={e => {if (text.length <= 60) setText(e.target.value)}}/>
            <input className="bg-green-500 hover:bg-green-700 text-white px-4 py-1 rounded" type="submit" value="Add"/>
        </form>
    </div>
}

export default AddTodo