import React from 'react'

const tickets = (props) => {
    
   
  return (
    <div> <div key={props.ticket.id} className="border border-success my-2 p-2 rounded">
    <div className='d-flex justify-content-between'>
    <div>ticket no : {props.ticket.id}</div>
    <div>{props.ticket.Status}</div>
    </div>
    <div className="d-flex justify-content-between">
    <div>Subject : {props.ticket.Subject}</div>
    <div>{props.ticket.Priority}</div>
    </div>
    <div>{props.ticket.Description}</div>
   </div>
      </div>
  )
}

export default tickets