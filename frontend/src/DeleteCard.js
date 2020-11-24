import React from 'react';
import './App.css';
import { Card, Col, Row } from 'reactstrap';

function DeleteCard() {
    const deletedMatches = [
        {imglink:"https://us.123rf.com/450wm/starush/starush1903/starush190300025/119688672-grumpy-oldfart-or-dissatisfied-displeased-old-man-isolated-portrait.jpg?ver=6"},
        {imglink:"https://4.bp.blogspot.com/-PC0ZQYq6EPQ/T75XC0FtLHI/AAAAAAAAAog/iInJr-_x-Vc/s1600/mean-old-lady.jpg"},
    ]

    return (
        <div classname="delete-card">
            <Row className="deletecard-row">
                {deletedMatches.map(deleted => (
                    <Col sm="2">
                        <Card style={{width:'10rem', height:'10rem'}}>
                            <div className="deletecard-content">
                                <img src={deleted.imglink} alt="" height='150' width='150'></img>
                                <br></br>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default DeleteCard;