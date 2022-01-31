import './App.css';
import Navbar from "./components/common/navbar";
import Main from "./components/common/main";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";   

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar title ="Home" otherNavs = {{link1:"Get Request", link2:"Editor",link3:"About",link4:"Chip"}}/>  {/* Passing single and multiple props */}
        <Main />
      </header>
    </div>
  );
}

export default App;
