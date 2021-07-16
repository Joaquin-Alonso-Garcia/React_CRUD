import logo from './logo.svg';
import Form from './components/Form';
// Importamos el scss
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CRUD REACT <code>Hola</code>
        </p>
        <p>Developed by Joaquin</p>
        <Form />
      </header>
    </div>
  );
}

export default App;
