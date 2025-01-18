import logo from './logo.svg';
import './App.css';
import Information from './components/Information';
import Chessboard from './components/Chessboard';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App">
      <Information/>
      <Chessboard/>
      <Buttons/>
    </div>
  );
}

export default App;
