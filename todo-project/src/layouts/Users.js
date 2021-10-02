import React from 'react'
import { Menu } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


export default function Users() {
    return (
        <div>  
            
            <Menu pointing vertical >
            
                <Menu.Item>
                      Çalışan
                    <List>
                        <List.Item  as={NavLink} to={"/employees"}>Çalışanları görüntüle</List.Item>
                        <List.Item as={NavLink} to={"/employee/add"}>Çalışan ekle</List.Item>
                    </List>



                </Menu.Item>

                <Menu.Item>
                    Yönetici
                <List>
                        <List.Item as={NavLink} to={"/executives"}>Yöneticileri görüntüle</List.Item>
                        <List.Item as={NavLink} to={"/executive/add"}>Yönetici ekle</List.Item>
                    </List>

                </Menu.Item>

                
              
            </Menu>
            
        </div>
    )
}
