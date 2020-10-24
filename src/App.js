import React from 'react';
import './App.css';
import { Card } from 'reactstrap'
import MatchCard from "./MatchCard"

function App() {
  return (
    <div className="App">
      <h1>Welcome Code Ada Hackers!</h1>
      <Card style={{width:'80rem', height:'20rem'}}>
        <div className="Bio"> 
          <h3>Your Bio!</h3>
            <div>
              <p>Your current hobbies include: swimming, tennis, knitting, and dancing.
                add more interests on your profile page to meet new people. Happy connecting!
              </p>
          </div>
       
       
        </div>
       
       
       </Card>
      <MatchCard className="card-appjs"></MatchCard>
    </div>
  );
}

export default App;
