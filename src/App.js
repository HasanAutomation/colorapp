import './App.css';
import seedColors from './config/seedColors';
import Palette from './screens/Palette';

function App() {
  return (
    <div className='App'>
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
