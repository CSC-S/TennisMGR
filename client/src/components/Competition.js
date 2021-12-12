/*eslint-disable*/
import React, { Component } from "react";
import { Container, CardGroup, Card } from "react-bootstrap"
import T1 from "../../src/img/Tennis7.jpg";
import T2 from "../../src/img/Tennis8.jpg";
import T3 from "../../src/img/Tennis9.jpg";
import { Link, Route } from "react-router-dom";
class Competition extends Component {
    render() {
        return (
            <div className="competition" id="competition">
                <Container>
                    <CardGroup className="row">
                        <Card border="white" style={{ width: "20rem" }}>
                            <Card.Img variant="top" src={T1} />
                            <Card.Body>
                                <Card.Title>성주군수기 대회</Card.Title>
                                <Card.Text>
                                <Link to="pageo6">자세히보기</Link>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">2021-11-20</small>
                            </Card.Footer>
                        </Card>
                        <Card border="white" style={{ width: "20rem" }}>
                            <Card.Img variant="top" src={T2} />
                            <Card.Body>
                                <Card.Title>청주 테니스 대회</Card.Title>
                                <Card.Text>
                                <Link to="pageo7">자세히보기</Link>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">2021-11-10</small>
                            </Card.Footer>
                        </Card>
                        <Card border="white" style={{ width: "20rem" }}>
                            <Card.Img variant="top" src={T3} />
                            <Card.Body>
                                <Card.Title>부산광역시 대회</Card.Title>
                                <Card.Text>
                                <Link to="pageo8">자세히보기</Link>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">2021-11-01</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        );


    }


}


export default Competition;