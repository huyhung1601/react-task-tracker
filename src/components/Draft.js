import React, { useState } from 'react'

const initialTask = {
    text :'',
    day :'',
    reminder :'false'
};

const onSubmit=(e) =>{
    e.preventDefault()

}
const Draft = () => {


    const [values, setValues] = useState(initialTask);
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'> 
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={values.text} onChange={(e) => setValues(e.target.value)}/>
            </div>
            <div className='form-control'> 
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' value={values.day} onChange={(e) => setValues(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'> 
                <label>Set Reminder</label>
                <input type='checkbox' checked ={values.reminder} value={values.reminder} onChange={(e) => setValues(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default Draft
