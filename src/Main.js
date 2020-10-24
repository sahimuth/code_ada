import React from 'react';
import './Main.css';
import { Card } from 'reactstrap'


function Main() {
    return (
        <div className="Main">
        <Card style={{width:'40rem', height:'20rem'}} className ="signcard">
            <div > 
                <h3 className="loginBox">Log in</h3>
                <p>
                <label>Username</label>
                <input type = "text"
                    id = "myText"
                    value = "text here" />
                </p>
                <p>
                <label>Password</label>
                <input type = "text"
                    id = "myText"
                    value = "text here" />
                </p>
                <div>
                    <label>forgot password</label>
                </div>
            </div>
       </Card>
       <div>
        <h className="welH"> Welcome To</h>
        <h className="ecH"> EConnect</h>
        <h className="QH"> Do you like to take Hikes</h>
        <h className="AH"> So does Teresa</h>
        <p className="solgan"> Find new friends like Teresa during this quarantine through shared hobbies</p>
       </div>
        </div>
     
    );
  }
  
  export default Main;