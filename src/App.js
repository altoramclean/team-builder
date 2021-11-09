import React, {useState} from 'react';
import Form from './Form';
import TeamMember from './TeamMember';
import './App.css';


const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {

  const [members, setMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const info = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }
  }

  return (
    <div className="App">
      <h1>Team Member Info</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {members.map(mem => {
        return(<TeamMember key={mem.id} details={mem} />)
      })}
    </div>
  );
}

export default App;