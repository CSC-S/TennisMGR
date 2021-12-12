import React, { Component } from "react";
import { Container, CardGroup, Card } from "react-bootstrap"
import 구장1 from ".././img/구장1.jpg";
import 구장2 from ".././img/구장2.jpg";
import 구장3 from ".././img/구장3.jpg";

class Review extends Component {
    render() {
        return (
            <div className="review" id="review">
                <Container>
                    <CardGroup className="row">
                        <Card border="white" style={{ width: "20rem" }}>
                            <Card.Img variant="top" src={구장1} />
                            <Card.Body>
                                <Card.Title>안양 한마음 테니스구장</Card.Title>
                                <Card.Text>
                                    안양에 있는 한마음 테니스구장에서는 벌써 2022년 새해맞이 테니스 친목대회를 준비하고 있다.
                                    더 추워지기전 야외에서 시원한바람을 맞으며 테니스를 즐기는 사람들이 북적인다.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">1일 전 업데이트</small>
                            </Card.Footer>
                        </Card>
                        <Card border="white" style={{ width: "20rem" }}>
                            <Card.Img variant="top" src={구장2} />
                            <Card.Body>
                                <Card.Title>가산 실내 테니스장</Card.Title>
                                <Card.Text>
                                    금천구 가산동에 위치한 실내 테니스장은 주변 직장인들의 퇴근 후 운동코스로 저녁에 특히
                                    회원들이 많다고 한다. 직장인을 위한 저녘수업과 주말수업이 새로 오픈되었다고 한다.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">3일 전 업데이트</small>
                            </Card.Footer>
                        </Card>
                        <Card border="white" style={{ width: "20rem" }}>
                            <Card.Img variant="top" src={구장3} />
                            <Card.Body>
                                <Card.Title>신림 해피니스 동호회</Card.Title>
                                <Card.Text>
                                    오늘은 해피니스 동호회를 방문하였습니다. 코로나 여파에도 방역수칙을 준수하여
                                    다들 안전하게 스포츠를 즐기는 모습은 타의 모범이 되지 않을까싶습니다.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">일주일 전 업데이트</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        );
    }
}

export default Review;