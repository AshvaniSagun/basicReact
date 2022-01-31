import './App.css';
import Navbar from "./components/common/navbar";
import Main from "./components/common/main";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

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
