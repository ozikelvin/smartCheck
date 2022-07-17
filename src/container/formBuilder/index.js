import React from 'react'
import TextField from '../../components/textField/textField';



const FormBuilder = ({ 

  formData = [], className, col, 
 extraChild, values }) =>
{

  return (
    <div className='' >
        <div className={className}>
          {formData.map((item, i) =>
            <div className={item?.inputClassName} key={i}>
              <TextField {...item} value={values ? values[item?.name] : ''} />
            </div>
          )}
        </div>
        <div className={col}>
          {extraChild && extraChild}
        </div>
      
    </div>
  )
}

export default FormBuilder