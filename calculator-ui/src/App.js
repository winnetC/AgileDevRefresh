import './App.css';
import Calculator from './components/Calculator';
import * as math from './calculator'; 

function App() {
  return (
    <Calculator onCalculate={math} />
  );
}

export default App;
