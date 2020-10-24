import React from 'react';
import './App.css';
import { Card } from 'reactstrap'
import MatchCard from "./MatchCard"

function App() {
  return (
    <div className="App">
      
      <h1 className="head">Welcome Code Ada Hackers!</h1>
    
      <Card style={{width:'80rem', height:'20rem'}}>
        <div>
        <div className="BioH"> 
          <h3>Your Bio!</h3>
          </div>
            <div className="Bio">
              <p>Your current hobbies include: tennis, golf, knitting, running, boxing, and debate.
                Add more interests on your profile page to meet people with the same interests. Happy connecting!
              </p>
          </div>
        </div>
       
       
        
       
       
       </Card>
      <MatchCard className="card-appjs"></MatchCard>
    </div>
  );
}

export default App;
