import {useState} from 'react';
import Question from "./Question";
import questions from "./questions";
import "./App.css";
import ErrorMens from './handleError';


const App = () =>  { 
  const [family, setFamily] = useState();
  const [personal, setPersonal ] = useState();
  const [psychological, setPsychological ] = useState();
  const [error, setError] = useState()
  
  const handleSubmit = (e, checked) => {
    if(e) {
      // getting info from every checkbox
      const value = e.target.name;
      //getting value of every checkbox of each questions that it checked
      const family = value.includes('family');
      const personal = value.includes('personal');
      const psychological = value.includes('psychological');

      if (family === true && checked === true) {
        setFamily(family)
      } else if ( personal === true && checked === true ) {
        setPersonal(personal)
      } else if ( psychological === true && checked === true) {
        setPsychological(psychological)
      }
    }
  }

  // Handle Error went submit the form 
    const Submit = (e) => {
      e.preventDefault()
      if (family === true && personal === true && psychological === true) {
        setError('Thank you!')
      } else {
        setError('You must select at least one value for each question')
      }
    }
  
  return (   
  <main className="App">
    <h1 className="App-title">Risk Assessment</h1>
    {error !== undefined ? (<ErrorMens Message ={ error }/>) : null }
    <form onSubmit={Submit}>
      {questions.map((question) => (
        <Question key={question.id} question={question} handleSubmit={handleSubmit}/>
      ))}
      <div>
        <button type="submit">Next</button>
      </div>
    </form>
  </main>
  )};

export default App;
