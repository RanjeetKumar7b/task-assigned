import './App.css';
import './Style.css'
import Page from './Page';
import Datajson from './Data.json';
function App() { 
  return (
    <Page {...Datajson}/>
  );
}

export default App;
