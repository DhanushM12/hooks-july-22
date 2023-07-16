import './App.css';
import UseCallback from './hooks/UseCallback';
import UseEffect from './hooks/UseEffect';
import UseMemo from './hooks/UseMemo';
import UseRef from './hooks/UseRef';
import UseState from './hooks/UseState';

function App() {
  return (
    <div className="App">
     <UseState />
     <br />
     <UseEffect />
     <br />
     <UseRef />
     <br />
     <UseMemo />
     <br />
     <UseCallback />
    </div>
  );
}

export default App;
