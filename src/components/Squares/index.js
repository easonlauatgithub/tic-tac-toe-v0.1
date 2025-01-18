import Square from "./Square";

function Squares() {
    let squares = [];

    for(let i=0;i<=8;i++){
        squares.push(<Square index={i}/>)
    }

    return (
      <div>
        {squares}
      </div>
    );
  }
  
  export default Squares;
  