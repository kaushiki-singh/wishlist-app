import './App.css';
import Header from './components/Homepage/Header';
import Home from './components/Homepage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route path="/products">
        <Header />
        <h1>i am products</h1>
      </Route>
      <Route path="/">
      <Header/>      
      <Home /> 
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
