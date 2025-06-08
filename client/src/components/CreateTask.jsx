import React from 'react'

export default function CreateTask({ handleSubmit }) {
    return (
        <div>
            <h2>Create a task</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='task-title-wrapper'>
                        <label htmlFor='taskTitle'>
                            Task Title
                        </label>
                        <input type="text" name='taskTitle' placeholder='Enter a title here.' />
                    </div>
                    <div className='task-details-wrapper'>
                        <label htmlFor='taskDetails'>Task details:</label>
                        <textarea name='taskDetails' placeholder='Enter task details here'></textarea>
                    </div>
                    <div>
                        <button type='submit' >Create task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
