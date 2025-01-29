import logo from './logo.svg';
import Information from './components/Information';
import Chessboard from './components/Chessboard';
import Buttons from './components/Buttons';


function TicTacToe() {
    return (
      <div className="TicTacToe">
        <Information/>
        <Chessboard/>
        <Buttons/>
      </div>
    );
  }
  
  export default TicTacToe;