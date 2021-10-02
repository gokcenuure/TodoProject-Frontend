import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import TodoService from "../services/todoService"
import { useDispatch } from "react-redux";
import { addToTask } from "../store/actions/taskActions"
import { toast } from "react-toastify";


export default function TodoList() {

    const dispatch = useDispatch()


    const [todos, setTodos] = useState([])

    useEffect(() => {
        let todoService = new TodoService()
        todoService.getTodos().then(result => setTodos(result.data.data))
    }, [])

    const handleAddToTask = (todo) => {
        dispatch(addToTask(todo))
        toast.success(`${todo.todoName} görevlere eklendi!`)
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Görev Adı</Table.HeaderCell>
                        <Table.HeaderCell>Görev Tanımı</Table.HeaderCell>
                        <Table.HeaderCell>Atama Tarihi</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {todos.map((todo) => (
                        <Table.Row key={todo.todoName}>
                            <Table.Cell>{todo.todoName}</Table.Cell>
                            <Table.Cell>{todo.definition}</Table.Cell>
                            <Table.Cell>{todo.appointmentDate}</Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => handleAddToTask(todo)} color="orange">Görevlere ekle</Button></Table.Cell>

                            <Table.Cell>
                                <Button onClick={() => handleAddToTask(todo)} color="orange">Görevlerden sil</Button></Table.Cell>
                        </Table.Row>
                    ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                       
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
