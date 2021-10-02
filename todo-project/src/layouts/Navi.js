import React, { useState } from 'react'
import TaskSummary from './TaskSummary'
import { Button, Container, DropdownItem, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'

export default function Navi() {

    const { taskItems } = useSelector(state => state.task)


    const [isAuthenticated, setIsAuthenticated] = useState(true)

    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="top" color="orange"  >
                <Container >
                    <Menu.Item
                        name="anasayfa"

                    />

                    <Menu.Item>
                       
                    <Dropdown pointing="top left" text="Todo">
                        <Dropdown.Menu>
                            <DropdownItem as={NavLink} to="/todos"  >Todos   </DropdownItem>
                            <Dropdown.Item as={NavLink} to="/todo/add" icon="info" >Todo ekle</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>

                    <Menu.Menu position="right">
                        {taskItems.length > 0 && <TaskSummary />}

                        {isAuthenticated ? <SignedIn signOut={handleSignOut} />
                            : <SignedOut signIn={handleSignIn} />}


                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
