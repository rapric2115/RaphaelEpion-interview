import {useState} from 'react';
import './tags.css';

const Choice = ({ name, value, label, handleChange} ) => {
  const [checked, setChecked] = useState(false);

  const styles = {
    label : {
      cursor: 'pointer',
      display: 'inline-block',
      margin: '0 15px',
      border: '1px solid #0d8d1e',
      padding: '12px',
      borderRadius: '1rem'
    },
    background : {
      backgroundColor: '#0d8d1e',
      color: '#fff',
      cursor: 'pointer',
      display: 'inline-block',
      margin: '0 15px',
      border: '1px solid #0d8d1e',
      padding: '12px',
      borderRadius: '1rem'
    }
  };

  return (
    <label style={checked !== false ? styles.background : styles.label} >
      <input name={name} type="checkbox" value={value}
      id={label}
      defaultChecked = {checked}
        // onChange = {() => {
        //   setChecked(!checked)
        //   }}
      onChange = {(e) => {
        handleChange(e, e.target.checked)
        setChecked(!checked)
        }}
      />
      {label}
    </label>
  )
  
};

export default Choice;
