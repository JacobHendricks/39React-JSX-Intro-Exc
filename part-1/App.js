const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent  name="Patrick"/>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))