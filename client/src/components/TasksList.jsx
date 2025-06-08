import React from 'react'

export default function TasksList({ data }) {
    return (
        <div>
            <h2>Tasks List</h2>
            <p>Here you will see the list of tasks.</p>
            {data.length ? data.map((task, index) => {
                return (
                    <div key={index} className='task-item'>
                        <h3>{task.title}</h3>
                        <p>{task.details}</p>
                    </div>
                )
            }) : <></>}
        </div>
    )
}
