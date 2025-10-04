import { useState } from "react"
import "./Lottery.css"
import { getTicket,sum} from "./helper";


export default function LotteryTicket(){
    let[ticket , setTicket] = useState(getTicket(3));
    let buynewticket=() =>{
        setTicket(getTicket(3))
    }

    let iswining=sum(ticket) === 15;
    return(
        <div>
        <h1>Lottery Game !</h1>
            <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
            </div><br></br>
            <button onClick={buynewticket}>Buy New Ticket</button>
            <h3>{iswining && "Congratulations You Won !"}</h3>
        </div>
    )
};