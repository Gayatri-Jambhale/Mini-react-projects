import { useState } from "react";
function LudoBoard(){
    let [moves,setMoves]=useState({blue:0, green:0,yellow:0,pink:0})
    let [arr,setArr]=useState(["no moves"]);

    function updateblue() {
        // moves.blue +=1;
        // console.log(`moves.blue:${moves.blue}`);
        // setMoves({...moves});
        arr.push("blue moves");
        console.log(arr);
        setMoves([...arr]);

    }
    function updategreen() {
        // moves.green +=1;
        // console.log(`moves.green:${moves.green}`);
        setMoves((prevMove) => {
            return {...moves , green:prevMove.green + 1}
        });
    }
    function updateyellow() {
        moves.yellow +=1;
        console.log(`moves.yellow:${moves.yellow}`);
        setMoves({...moves});
    }
    function updatepink() {
        moves.pink +=1;
        console.log(`moves.pink:${moves.pink}`);
        setMoves({...moves});
    }

    return(
        <>
        <h2 style={{color:"chocolate"}}>Ludo game</h2>
        <p>{arr}</p>
        <div>
            <p>Blue Moves:{moves.blue}</p>
            <button style={{background:"blue"}} onClick={updateblue}>+1</button>
            <p>Green Moves:{moves.green}</p>
            <button style={{background:"green"}} onClick={updategreen}>+1</button>
            <p>Yellow Moves:{moves.yellow}</p>
            <button style={{background:"yellow"}} onClick={updateyellow}>+1</button>
            <p>Pink Moves:{moves.pink}</p>
            <button style={{background:"pink"}} onClick={updatepink}>+1</button>
        </div>
        </>
    )
}

export default LudoBoard;