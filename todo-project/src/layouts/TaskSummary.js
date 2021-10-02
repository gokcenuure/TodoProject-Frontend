import React from 'react'
import { NavLink } from 'react-router-dom'
import {Dropdown, Label} from 'semantic-ui-react'
import { useSelector } from 'react-redux'

export default function TaskSummary() {

    const {taskItems} = useSelector(state => state.task)
    return (
        <div>
            <Dropdown item text='Görevler'>
                <Dropdown.Menu>
                    {
                        taskItems.map((taskItem)=>(
                            <Dropdown.Item key={taskItem.todo.id}>
                                {taskItem.todo.todoName}
                                <Label>
                                    {taskItem.quantity}
                                </Label>
                            </Dropdown.Item>
                        ))
                    }
                    
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/task">Görevlere git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
