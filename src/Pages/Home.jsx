import React from "react";
import { useState } from "react";
import Tickets from "../Components/Tickets";
import tickets from "../tickets.json";
const Home = () => {
  const [problemTickets, setProblemTickets] = useState(tickets.tickets);
  const filteredCars = (priorityType) =>{
    if (!priorityType) {
        return problemTickets;
      }
    const ticketFilter = problemTickets.filter(
        (ticket) => ticket.Priority === priorityType
      );
      setProblemTickets(ticketFilter);
    }
 
    console.log()
  return (
    <div>
      <h6 className="text-center">Problems Tickets</h6>
      <button className="btn btn-primary mx-4"onClick={() => setProblemTickets(tickets.tickets)}>all</button>
      <button className="btn btn-primary mx-4" onClick={() => filteredCars("high")}>Priority</button>
      <button className="btn btn-primary mx-4"onClick={() => filteredCars("low")}>low</button>
      {problemTickets.map((ticket) => (
        <Tickets ticket={ticket} />
      ))}
    </div>
  );
};

export default Home;
