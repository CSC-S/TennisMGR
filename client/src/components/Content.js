import React, { Component } from "react";
import { Carousel } from "react-bootstrap"
import 메인1 from ".././img/main01.jpg";
import 메인2 from ".././img/main02.jpg";
import 메인3 from ".././img/main03.jpg";

class Content extends Component {
    render() {
        return (
            <div className="content" style={ { paddingLeft : '20px', paddingRight : '20px' } }>
                <Carousel>
                    <Carousel.Item interval={2500}>
                        <img className="background" src={메인1} alt="First slide" />
                        <Carousel.Caption>
                            <h3>테니스 상품 판매</h3>
                            <p>테니스화부터 테니스라켓까지 다양하게 구비중</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <img className="background" src={메인2} alt="Second slide" />
                        <Carousel.Caption>
                            <h3>테니스구장 & 수업 리뷰</h3>
                            <p>자세한 내용은 Review 참고</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <img className="background" src={메인3} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>야간 개장 테니스구장</h3>
                            <p>
                                자세한 정보는 Court Info 링크
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );

    }

}

export default Content;