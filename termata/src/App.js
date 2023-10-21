import logo from './logo.svg';
import './App.css';

import Calendar from './components/Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Termata</h1>

        <Calendar/>
      </header>
    </div>
  );
}

export default App;
