import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Button, FormField, Label } from 'semantic-ui-react';
import TextInput from '../utilities/customFormControls/TextInput';
export default function TodoAdd() {

    const initialValues = { todoName: "", definition: "" }

    const schema = Yup.object({
        todoName: Yup.string().required("Görev adı zorunlu"),
        definition: Yup.string().required("Görev tanımı zorunlu")
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
                    <TextInput name="todoName" placeholder="Görev adı"/>
                    <TextInput name="definition" placeholder="Görev tanımı"/>

                    <Button color= "orange" type= "submit" >Ekle</Button>
                </Form>
            </Formik>
        
    );
}
