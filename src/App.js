import { useState } from 'react';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <Board></Board>
      
    </div>
  );
}


function Square({value,onSquareClick}) {
  // const [value, setValue] = useState(null);
  // function () =>handleclick(0)() {
  //   setValue('X')

  
  
  return <button className='square' onClick={onSquareClick}>{ value}</button>
}


function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleclick(i) {
    if (square[i] || calculateWinner(square)) {
      return;
    }

    const nextSquares = square.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquare(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
      <Square value = {square[0]} onSquareClick={() =>handleclick(0)}></Square>
      <Square value = {square[1]} onSquareClick={() =>handleclick(1)}></Square>
      <Square value = {square[2]} onSquareClick={() =>handleclick(2)}></Square>
      </div>
      <div className="board-row">
      <Square value = {square[3]} onSquareClick={() =>handleclick(3)}></Square>
      <Square value = {square[4]} onSquareClick={() =>handleclick(4)}></Square>
      <Square value = {square[5]} onSquareClick={() =>handleclick(5)}></Square>
      
      </div>
      <div className="board-row">
      <Square value = {square[6]} onSquareClick={() =>handleclick(6)}></Square>
      <Square value = {square[7]} onSquareClick={() =>handleclick(7)}></Square>
      <Square value = {square[8]} onSquareClick={() =>handleclick(8)}></Square>
    
      </div>
    </>
  );
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;