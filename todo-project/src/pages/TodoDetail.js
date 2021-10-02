import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from 'semantic-ui-react'
import TodoService from "../services/todoService"

export default function TodoDetail() {
  let { name } = useParams();

  const [todo, setTodo] = useState({});

  useEffect(() => {
    let todoService = new TodoService()
    todoService.getByTodoName(name).then(result => setTodo(result.data.data))
  }, [])


  return (
    <div>



      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Card.Header>{todo}</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>

      </Card.Group>
    </div>
  )
}
