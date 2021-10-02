import React from 'react'
import TodoList from '../pages/TodoList'
import Users from './Users'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import TodoDetail from '../pages/TodoDetail'
import TaskDetail from '../pages/TaskDetail'
import { ToastContainer } from 'react-toastify'
import TodoAdd from '../pages/TodoAdd'
import UserInformation from './UserInformation'
import SignedIn from './SignedIn'
import Employees from './Employees'
import Executives from './Executives'
import EmployeeAdd from '../pages/EmployeeAdd'
import ExecutiveAdd from '../pages/ExecutiveAdd'


export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Users />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={TodoList} />
                        <Route exact path="/todos" component={TodoList} />
                        <Route path="/todos/:name" component={TodoDetail} />
                        <Route path="/task" component={TaskDetail} />
                        <Route path="/todo/add" component={TodoAdd} />
                        <Route path="/user/information" component={UserInformation}/>
                        <Route path="/employees" component={Employees} />
                        <Route path="/executives" component={Executives} />
                        <Route path="/employee/add" component={EmployeeAdd} />
                        <Route path="/executive/add" component={ExecutiveAdd} />

                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    )
}