import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
<Switch>
<Route component={Register} path="/register" exact/>
<Route component={Login} path="/login" exact/>
<Route component={Home} path="/" exact/>

</Switch>

      </Router>


    </div>
  );
}

export default App;
