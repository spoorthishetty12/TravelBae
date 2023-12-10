import './styles.css';
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Destinations from './routes/Destinations';
import Report from './routes/Report';
import Italy from './routes/Italy'
import Tokyo from './routes/Tokyo';
import Bali from './routes/Bali';
import Rome from './routes/Rome';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path= "/" element = {<Home />}/>
          <Route path= "/destinations" element = {<Destinations />}/>
          <Route path= "/report" element = {<Report />}/>
          <Route path= "/italy" element = {<Italy/>} />
          <Route path= "/tokyo" element = {<Tokyo/>} />
          <Route path= "/bali" element = {<Bali/>} />
          <Route path= "/rome" element = {<Rome/>} />
      </Routes>
    </div>
  );
}

export default App;
