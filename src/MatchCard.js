import React from 'react';
import './App.css';
import { Card, Col, Row } from 'reactstrap'

function MatchCard() {
    const matches = [
        {imglink:"https://uiuc.hack4impact.org/images/people/sahithi_muthyala.jpg",name:"Sahi",location:"Hightstown, NJ",number:"111-222-3333",email:"sahi@gmail.com",similarhobbies:"Tennis, golf",otherhobbies:"Painting, dancing"},
        {imglink:"https://media-exp1.licdn.com/dms/image/C5603AQH51-rpHf1Luw/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=p8wGaBdyEEXBgISCj_h7NEPxhVq2BqNwMn_KEBGyxQs",name:"Noopur",location:"San Francisco, CA",number:"555-666-7777",email:"noopur@gmail.com",similarhobbies:"Golf, knitting",otherhobbies:"Sleeping, swimming"},
        {imglink:"https://media-exp1.licdn.com/dms/image/C4E03AQG3ynI-5qSfzQ/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=yCLUrzkIy18S5jN5Iubb04SeILzPY3E3uS-5AnhO-30",name:"Shoshanna",location:"Naperville, IL",number:"333-444-5555",email:"shoshanna@gmail.com",similarhobbies:"Running, debate",otherhobbies:"Listening to music"},
        {imglink:"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/73413137_691950014548983_5087352306429591552_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=kdoLwcTImx4AX-ZNyud&_nc_ht=scontent-sjc3-1.xx&oh=4c2e7005beeb5b7a1acbaabfed9e6ee4&oe=5FBABB3B",name:"Julie",location:"San Francisco, CA",number:"999-222-8888",email:"julie@gmail.com",similarhobbies:"Boxing, running",otherhobbies:"Drawing, Swimming"},
    ]

    return (
        <div className="match-card">
            <Row className = "matchcard-row">
                {matches.map(match => (
                    <Col>
                        <Card style={{width:'20rem', height:'20rem'}}>
                            <div className="card-content">
                                <h3>{match.name}</h3>
                                <img src={match.imglink} alt="" height='150' width='150'></img>
                                <br></br>
                                <text>{match.location}</text>
                                <br></br>
                                <text>{match.number}</text>
                                <br></br>
                                <text>{match.email}</text>
                                <br></br>
                                <text> <b>Common Hobbies:</b> {match.similarhobbies}</text>
                                <br></br>
                                <text><b>Other Hobbies:</b> {match.otherhobbies}</text>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default MatchCard;