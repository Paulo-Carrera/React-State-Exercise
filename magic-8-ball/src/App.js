import logo from './logo.svg';
import './App.css';
import Answers from './Answers';
import MagicEightBall from './MagicEightBall';

function App() {
  return (
    <div className="App">
      <MagicEightBall answers = {Answers}/>
    </div>
  );
}

export default App;
