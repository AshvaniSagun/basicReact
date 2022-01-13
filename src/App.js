import './App.css';
import Header from "./common/header";
import Main from "./common/main";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@popperjs/core/dist/umd/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
      </header>
    </div>
  );
}

export default App;
