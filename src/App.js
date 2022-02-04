import './App.css';
import seedColors from './config/seedColors';
import AppDragDropDemo from './screens/AppDragDropDemo';
import Palette from './screens/Palette';

function App() {
  return (
    <div className='App'>
      {/* <Palette {...seedColors[4]} /> */}
      <AppDragDropDemo />
    </div>
  );
}

export default App;
