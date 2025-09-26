import { useState } from "react"

const useInputField =(defaultValue)=>{
    const [fieldValue, setFieldValue]=useState(defaultValue);


    const handleOnFieldChange =(e)=>{
        setFieldValue(e.target.value);
    }
    
    return [fieldValue, handleOnFieldChange];
}

export default useInputField;


