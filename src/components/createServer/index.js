import React from 'react'
import FormBuilder from '../../container/formBuilder'
import { Form }  from 'antd';
import { CREATE_FORM } from '../../constants/domi';
import Button from '../Button';


const CreateServer = () =>{
 
    const onSubmit = (values) =>{
        console.log(values)
    }

return (
<Form 
name="Create Account"
        initialValues={{
          remember: true,
        }}

        layout={'inline'}
        onFinish={onSubmit}
 >
    <FormBuilder 
        formData={CREATE_FORM}
     />

        <div className='ant-col-lg-24 mt-5' >
            <Button type={'submit'} label='Create'  />
        </div>

</Form>
)
}


export default CreateServer