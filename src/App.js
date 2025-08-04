import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import Doctors from './components/Doctors';

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path = "/doctors" component={Doctors} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;