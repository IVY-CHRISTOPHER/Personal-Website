// App.js
import NavBar from './components/NavBar';
import Home from './components/Home'
import "./styles/App.css"

const App = () => {
  return (
    <div className='app-shell'>
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
