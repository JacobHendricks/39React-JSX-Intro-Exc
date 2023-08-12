const App = () => (
  <div>
    <Person name="Bob" age={67} hobbies={["Woodworking", "Cooking", "Eating"]}></Person>
    <Person name="BillyBob" age={17} hobbies={["Running", "Larping"]}></Person>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))