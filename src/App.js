import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import './app.css';
import OurWorks from './Pages/OurWorks';
import Casting from './Pages/Casting';
import Academy from './Pages/Academy';
import CastSingle from './Pages/CastSingle';
import FormPage from './Pages/Form'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/form" component={FormPage}/>
          <Route path="/castprofile" component={CastSingle} />
          <Route path="/academy" component={Academy} />
          <Route path="/casting" component={Casting} />
          <Route path="/works" component={OurWorks} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
