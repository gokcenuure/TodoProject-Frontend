import React from 'react'
import * as Yup from "yup";
import { Formik, Form } from 'formik'
import { Button } from 'semantic-ui-react';
import TextInput from '../utilities/customFormControls/TextInput';

export default function ExecutiveAdd() {


    const initialValues = { firstName: "", lastName: "" }

    const schema = Yup.object({
        firstName: Yup.string().required("Adı zorunlu"),
        lastName: Yup.string().required("Soyadı zorunlu")
    })




    return (
    
             <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                <Form className="ui form">
                    <TextInput name="firstName" placeholder="Adı"/>
                    <TextInput name="lastName" placeholder="Soyadı"/>

                    <Button color= "orange" type= "submit" >Ekle</Button>
                </Form>
            </Formik>
        
        
    )
}
