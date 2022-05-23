import { Form, Field } from 'react-final-form'
import './App.css';
import FinalFormInput from './Components/FinalFormInput';

function App() {
  const onSubmit =(e)=>{
debugger;
  };

  const validate = (e)=>{
    debugger
  };
  
  return (
    <div className="App">
      <h1>React Final Form</h1>
      <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" placeholder="First Name" />
        </div>
        
        <button type="submit">Submit</button>
      </form>)}/>
    </div>
  )
}

export default App;
