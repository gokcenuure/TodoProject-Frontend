import Reactsss from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
export default function UserInformation() {
    


    return (
        <div>
            
            <Card>
                <Image src='https://diaerp.net/tema/genel/uploads/ekibimiz/3.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Gökçe</Card.Header>
                    <Card.Meta>2021'de katıldı
                    </Card.Meta>
                    <Card.Description>
                        Sivas'ta okuyor
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                   
                </Card.Content>
            </Card>
           



        </div>
    )
    }
