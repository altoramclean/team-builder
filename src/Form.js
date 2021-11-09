import React from 'react'


export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name 
        const value = evt.target.value
        update(name, value)
    }
    const onSubmit = evt =>{
     evt.preventDefault() 
     submit()  
    }
return(
    <form  className="Form" onSubmit={onSubmit}>
        <div className='inputs'>
            <label>Name
            <input 
              type='text'
              name = 'name'
              value={values.name}
              onChange={onChange}
              maxLength = '30'
              placeholder = "Enter Your Name!"
               />
            </label>
            <label>Email
            <input 
              type="email"
              name = "email"
              value={values.email}
              onChange={onChange}
              placeholder = "Enter Your Email!"
               />
            </label>
            <label>Role
            <select 
            value ={values.role} 
            name="role" 
            onChange={onChange}>
                
                <option value="">--Select a Role--</option> 
                <option value="Backend Engineer">Backend Engineer</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
                <option value=" UX Designer"> UX Designer</option>
            </select>
            </label>

            <div className='submit'>
          <button>Submit Here!</button>
        </div>

        </div>
    </form>
)

} 