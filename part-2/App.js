const App = () => (
  <div>
    <Tweet username="Calhoun" name="Calhoun" date="08/12/2023" message="It's hot as Satan's balls today"/>
    <Tweet username="Callahan" name="Callahan" date="08/11/2023" message="It's hotter than "/>
    <Tweet username="Cody" name="Cody" date={new Date().toDateString()} message="It's hot "/>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))