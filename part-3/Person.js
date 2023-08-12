const Person = (props) => {
  let message;
  if (props.age >= 18) {
    message = "Please go vote!"
  } else {
    message = "You must be 18 to vote"
  }

  return (
    <div>
      <p>Learn some information about this person</p>
      <p>Name: {props.name.slice(0, 6)}</p>
      <ul>Hobbies {props.hobbies.map(h => <li>{h}</li>)}
      </ul>
      <h3>{message}</h3>
    </div>
  )
}