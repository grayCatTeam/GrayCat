import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home"
import './app.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
