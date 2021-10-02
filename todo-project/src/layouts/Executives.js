import React from 'react'
import { useState, useEffect }  from 'react'
import TodoService from "../services/todoService"
import { useDispatch } from "react-redux";
import { addToTask } from "../store/actions/taskActions"
import { Button, Table } from 'semantic-ui-react'
import { toast } from "react-toastify";



export default function Executives() {
    const dispatch = useDispatch()


    const [executives, setExecutives] = useState([])

    useEffect(() => {
        let todoService = new TodoService()
        todoService.getExecutives().then(result => setExecutives(result.data.data))
    }, [])

    const handleAddToTask = (executives) => {
        dispatch(addToTask(executives))
        toast.success(`${executives.executivesFirstName} yöneticilere eklendi!`)
    }

    return (
        <div>
            <div>
            <Table.Body>
                    {executives.map((executives) => (
                        <Table.Row key={executives.firstName}>
                            <Table.Cell>{executives.firstName}</Table.Cell>
                            <Table.Cell>{executives.lastName}</Table.Cell>
                            <Table.Cell>{executives.position}</Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => handleAddToTask(executives)} color="orange">Yöneticilere ekle</Button></Table.Cell>

                            <Table.Cell>
                                <Button onClick={() => handleAddToTask(executives)} color="orange">Yöneticilerden sil</Button></Table.Cell>
                        </Table.Row>
                    ))
                    }

                </Table.Body>
        </div>
        </div>
    )
}
