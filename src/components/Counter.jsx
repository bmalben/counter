import React, {useState} from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

function Counter() {
    const[counter,setCounter]=useState(0);

    function increment(){
        setCounter(counter+1)
    }

    function reset(){
        setCounter(0)
    }

    function decrement(){
        if(counter>0){
            setCounter(counter-1)
        }
    }
    
  return (
    <div>
      <div className="container text-center mt-5">
        <h1 className="head">Counter-App</h1>
        <h1 className='fw-bold'>{counter}</h1>
        <div className="align-items-center m-4">
        <MDBBtn rounded className='me-1' color='success' onClick={increment}>
        Increment
        </MDBBtn>
        <MDBBtn rounded className='me-1' color='danger' onClick={reset}>
        Reset
        </MDBBtn>
        <MDBBtn rounded className='me-1' color='warning' onClick={decrement}>
        Decrement
        </MDBBtn>
        </div>
      </div>
    </div>
  )
}

export default Counter
