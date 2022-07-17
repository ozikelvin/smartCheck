import React from 'react'
import FormBuilder from '../../container/formBuilder'
import { Form } from 'antd';
import { CREATE_FORM } from '../../constants/domi';
import Button from '../Button';
import { Footer } from './style';


const CreateServer = () =>
{
    // Methods
    const onSubmit = (values) => { console.log(values); };

    // Styles Variables
    const submit = { paddingInline: '2em' };
    const cancel = { backgroundColor: 'transparent', paddingInline: '2em' };
    const formParams = { onFinish: onSubmit, name: 'Create Account', layout: 'inline', initialValues: { remember: true } };

    return (
        <Form {...formParams}>
            <FormBuilder formData={CREATE_FORM} />

            <Footer>
                <Button type={'button'} label='cancel' style={cancel} />
                <Button type={'submit'} label='Create' style={submit} />
            </Footer>

        </Form>
    )
}


export default CreateServer;
