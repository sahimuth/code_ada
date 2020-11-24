import React from 'react';
import './App.css';
import { Card, Col } from 'reactstrap'
import MatchCard from "./MatchCard"
import DeleteCard from "./DeleteCard"

function App() {
  return (
    <div className="App">
      <h1 className="head"><b>Welcome Code Ada Hackers!</b></h1>
      <Col>
        <Card className="bio-card" style={{width:'80rem', height:'8rem', backgroundColor:"lightblue"}}>
          <h3 className="BioH">Bio</h3>
          <p className="Bio">
            My current hobbies include: tennis, golf, knitting, running, boxing, and debate.
            Add more interests on your profile page to meet people with the same interests. Happy connecting!
          </p>
        </Card>
      </Col>
      <h3 className="text">Your Matches</h3>
      <MatchCard className="match-appjs"></MatchCard>
      <h3 className="text">Deleted Matches</h3>
      <DeleteCard className="delete-appjs"></DeleteCard>
    </div>
  );
}

export default App;
