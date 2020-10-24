import React from 'react';
import './App.css';
import { Card } from 'reactstrap'

function MatchCard() {
    const matches = [
        {imglink:"https://uiuc.hack4impact.org/images/people/sahithi_muthyala.jpg",name:"Sahi",location:"Hightstown, NJ",number:"111-222-3333",email:"sahi@gmail.com",similarhobbies:"Tennis, golf",otherhobbies:"Swimming, reading, drawing, dancing"},
        {imglink:"",name:"Noopur",location:"San Francisco, CA",number:"555-666-7777",email:"noopur@gmail.com",similarhobbies:"Golf, knitting",otherhobbies:"Sleeping, swimming"},
        {imglink:"https://media-exp1.licdn.com/dms/image/C4E03AQG3ynI-5qSfzQ/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=yCLUrzkIy18S5jN5Iubb04SeILzPY3E3uS-5AnhO-30",name:"Shoshanna",location:"Naperville, IL",number:"333-444-5555",email:"shoshanna@gmail.com",similarhobbies:"Running, boxing",otherhobbies:"Drawing, listening to music"},
        {imglink:"",name:"Julie",location:"San Francisco, CA",number:"999-222-8888",email:"julie@gmail.com",similarhobbies:"Running, boxing",otherhobbies:"Drawing, listening to music"},
    ]

    // <img className="icon" src="./public/phoneicon.png"></img>

    return (
        <div className="match-card">
            {matches.map(match => (
                <Card style={{width:'20rem', height:'20rem'}}>
                    <div className="card-content">
                        <h3>{match.name}</h3>
                        <img src={match.imglink} height='150' width='150'></img>
                        <br></br>
                        <text>{match.location}</text>
                        <br></br>
                        <text>{match.number}</text>
                        <br></br>
                        <text>{match.email}</text>
                        <br></br>
                        <text>{match.similarhobbies}</text>
                        <br></br>
                        <text>{match.otherhobbies}</text>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default MatchCard;