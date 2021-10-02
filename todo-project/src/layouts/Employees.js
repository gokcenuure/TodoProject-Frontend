import React,{ useState, useEffect }  from 'react'
import TodoService from "../services/todoService"
import { useDispatch } from "react-redux";
import { addToTask } from "../store/actions/taskActions"
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import { toast } from "react-toastify";


export default function Employees() {

    const dispatch = useDispatch()


    const [employees, setEmployees] = useState([])

    useEffect(() => {
        let todoService = new TodoService()
        todoService.getEmployees().then(result => setEmployees(result.data.data))
    }, [])

    const handleAddToTask = (employess) => {
        dispatch(addToTask(employees))
        toast.success(`${employees.EmployeesFirstName} çalışanlara eklendi!`)
    }

    return (
        <div>
            <Table.Body>
                    {employees.map((employees) => (
                        <Table.Row key={employees.firstName}>
                            <Table.Cell>{employees.firstName}</Table.Cell>
                            <Table.Cell>{employees.lastName}</Table.Cell>
                            <Table.Cell>{employees.position}</Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => handleAddToTask(employees)} color="orange">Çalışanlara ekle</Button></Table.Cell>

                            <Table.Cell>
                                <Button onClick={() => handleAddToTask(employees)} color="orange">Çalışanlardan sil</Button></Table.Cell>
                        </Table.Row>
                    ))
                    }

                </Table.Body>
        </div>
    )
}
