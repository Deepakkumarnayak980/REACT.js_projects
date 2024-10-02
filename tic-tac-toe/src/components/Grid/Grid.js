import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css';
import isWinner from '../helpers/checkWinner';

function Grid({ numberOfCards }) {
    
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    function play(index) {
        if (board[index] || winner) return; // Prevent play if there's already a winner or the cell is filled
        
        const newBoard = [...board];
        
        if (turn) {
            newBoard[index] = "O";
        } else {
            newBoard[index] = "X";
        }

        const win = isWinner(newBoard, turn ? "O" : "X");
        if (win) {
            setWinner(win);
        }
        
        setBoard(newBoard);
        setTurn(!turn);
    }
  
    function reset() {
        setTurn(true); // Reset to initial turn (O starts)
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""));
    }

    return (
        <div className="grid-wrapper">
            {winner && (
                <>
                    <h1 className="turn-highlight">Winner is {winner}</h1>
                    <button className="reset" onClick={reset}>Reset Game</button>
                </>
            )}
            
            {!winner && (
                <h1 className="turn-highlight">Current Turn: {turn ? 'O' : 'X'}</h1>
            )}

            <div className="grid">
                {board.map((el, idx) => 
                    <Card key={idx} player={el} onPlay={() => play(idx)} />
                )}
            </div>
        </div>
    );
}

export default Grid;
