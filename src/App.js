import logo from './logo.svg';
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Nav from './Nav';
import Home from './Home';
import Cheetos from './Cheetos';
import Snickers from './Snickers';
import KitKat from './KitKat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/cheetos"> 
                <Cheetos />
            </Route>
            <Route exact path="/kitkat"> 
                <KitKat />
            </Route>
            <Route exact path="/snickers"> 
                <Snickers />
            </Route>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
