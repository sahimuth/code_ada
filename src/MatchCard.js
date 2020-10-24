import React from 'react';
import './App.css';

function MatchCard() {
    const matches = [
        {name:"Noopur",location:"San Francisco",number:"111-222-3333",email:"noopur@gmail.com",similarhobbies:"Tennis, golf",otherhobbies:"Swimming, reading, drawing, dancing"},
        {name:"Sahi",location:"Hightstown",number:"555-666-7777",email:"sahi@gmail.com",similarhobbies:"Golf, knitting",otherhobbies:"Sleeping, swimming"},
        {name:"Ryan",location:"Chicago",number:"333-444-5555",email:"ryan@gmail.com",similarhobbies:"Running, boxing",otherhobbies:"Drawing, listening to music"},
    ]

    // <img src={person.imglink}></img>
    // <img className="icon" src="./public/phoneicon.png"></img>

    return (
        <div className="match-card">
            {matches.map(match => (
                <>
                    <h3>{match.name}</h3>
                    <text>{match.location}</text>
                    <text>{match.number}</text>
                    <text>{match.email}</text>
                    <text>{match.similarhobbies}</text>
                    <text>{match.otherhobbies}</text>
                </>
            ))}
        </div>
    );
}

export default MatchCard;