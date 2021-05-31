import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Routes} from '../src/routes/Routers'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
<Routes />
        </div>
    </BrowserRouter>
  );
}

export default App;
