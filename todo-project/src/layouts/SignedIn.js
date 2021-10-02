import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown,Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.kooplog.com/wp-content/uploads/2020/11/Logo-5.png" />
                <Dropdown pointing="top left" text="Gökçe">
                    <Dropdown.Menu>
                        <Dropdown.Item as={NavLink} to={"/user/information"} text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
