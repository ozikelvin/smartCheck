import React from 'react'
import FormBuilder from '../../container/formBuilder'
import { Form }  from 'antd';

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

        layout={'horizontal'}
        onFinish={onSubmit}
 >
    
</Form>
)
}


export default CreateServer