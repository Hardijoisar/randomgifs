import logo from './logo.svg';
import './App.css';
import { Random } from './components/Random';
import { Tag } from './components/Tag';

function App() {
  return (
    <div className="App">
      <div><h1 className='heading1'>RANDOM GIF</h1></div>
      <div className='randomTag'>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
