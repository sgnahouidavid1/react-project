import "./App.css";
import { useState, useEffect } from "react"; 
import Square from "./Components/Square";
import{Patterns} from "./Patterns";

function App() {
  // eslint-disable-next-line
  const[board, setBoard]= useState(["","","","","","","","",""]); // create a array called useState of empty value that will hold either an X,O or nonthing.
    
  const[player,setPlayer] = useState("O");
  const[result, setResult] = useState({winner: "none" , state: "none" });
  useEffect(() => {
    checkWin();
    checkIfTie();
    if (player == "X") {
      setPlayer("O")
    } else {
      setPlayer("X")
    }
  }, [board]);
  useEffect(() => {
    if (result.state != "none") {
      alert("The winner is: " )
    }

  }, [result]);
  const chooseSquare = (square) => {
    setBoard(
      board.map((val,idx) => {
        if (idx === square && val === "") {
          return player;
        }
        return val;
      })
    );
    
  };

  const checkWin = () => {
    Patterns.forEach((currPatterns) => {
      const firstPlayer = board [currPatterns[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPatterns.forEach((idx) => {
        if (board[idx]!= firstPlayer) {
          foundWinningPattern = false;
        }
      })

      if  (foundWinningPattern) {
        setResult ({winner: player , state: "won"});
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === ""){
        filled = false;
      }

    })
    if (filled){
      setResult({winner:"NO one" , state: "Tie"})
    }

  };
  
    return (
      <div className="App">
        <div className = "board"> 
        
          <div className = "row">
            <Square 
              val={board[0]}
              chooseSquare ={() => {
                chooseSquare(0);
              }} 
            />
            <Square 
              val={board[1]}
              chooseSquare ={() => {
                chooseSquare(1);
              }} 
            />
            <Square 
              val={board[2]}
              chooseSquare ={() => {
                chooseSquare(2);
              }} 
            />
          </div>
          <div className = "row">
          <Square 
              val={board[3]}
              chooseSquare ={() => {
                chooseSquare(3);
              }} 
            />
            <Square 
              val={board[4]}
              chooseSquare ={() => {
                chooseSquare(4);
              }} 
            />
            <Square 
              val={board[5]}
              chooseSquare ={() => {
                chooseSquare(5);
              }} 
            />
          </div>
          <div className = "row">
          <Square 
              val={board[6]}
              chooseSquare ={() => {
                chooseSquare(6);
              }} 
            />
            <Square 
              val={board[7]}
              chooseSquare ={() => {
                chooseSquare(7);
              }} 
            />
            <Square 
              val={board[8]}
              chooseSquare ={() => {
                chooseSquare(8);
              }} 
            />
          </div>
        </div>
      </div>
    );
}

export default App;
