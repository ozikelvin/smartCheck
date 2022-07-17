import React from 'react'
import FormBuilder from '../../container/formBuilder'
import { Form } from 'antd';
import { CREATE_FORM } from '../../constants/domi';
import Button from '../Button';


const CreateServer = () =>
{
    // Methods
    const onSubmit = (values) => { console.log(values); };

    return (
        <Form
            onFinish={onSubmit} name="Create Account"
            layout={'horizontal'} initialValues={{ remember: true, }}
        >
            <FormBuilder formData={CREATE_FORM} />
            <div><Button type={'submit'} label='Create' /></div>

        </Form>
    )
}


export default CreateServer;