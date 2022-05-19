const styles = {
    Bad : {
        border: '2px solid red',
        padding: '.5rem',
        width: '80%'
    },
    Good : {
        border: '2px solid green',
        padding: '.5rem',
        width: '80%'
    }
}


const ErrorMens = ({Message}) => {
    const Mens = Message;
  return ( 
      <div style={Mens.includes('Thank') !== false ? styles.Good : styles.Bad}> {Message} </div>
  )
}

export default ErrorMens;