import React, {useState} from 'react';
import Form from './Form';
import TeamMember from './TeamMember';

import './App.css';

const initialValue = {
  username: '',
  email: '',
  role:'',
}











function App() {
  const [members, setMembers] = useState ([]);
  const [formValues, setFormValues] = useState(initialValue);

const updateForm = (input1, input2) => {
    setFormValues({...formValues, [input1]: input2})
  }
  

const submitForm = () => {
  const newMember = {

  username: formValues.username.trim(),
  email: formValues.email.trim(),
  role: formValues.role.trim()
  }
}


return (
  <div className="App">
    
  </div>
);
}

export default App;
