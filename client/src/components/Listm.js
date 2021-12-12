/*eslint-disable*/
import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ListGroup } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import ".././App.css";

class Listm extends Component {
  render() {
    return (
      <div className="Listm" style={{display:'flex', justifyContent: 'center'}}>
        <div style={{  display: "block", width: 1200, padding: 30, justifyContent: 'center' }}>
          <h1>테니스 대회 목록</h1>
          <ListGroup>
            <ListGroup.Item>
              {" "}
              <Link to="pageo">앰버서더 컵 주한대사관 친선 테니스대회</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Link to="./pageo1">
                2021 ITF IMG 오산국제주니어 테니스 투어대회
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Link to="pageo2">
                제37회 전국하계대학테니스 연맹전 및 제13회 회장기대회
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Link to="pageo3">6월 여자부 궁촌테니스대회</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Link to="pageo4">6월 남자부 궁촌테니스대회</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Link to="pageo5">서진정밀배 혼합복식</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Link to="pageo6">주작배 테니스대회</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Link to="pageo7">이근재배 전국테니스대회</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Link to="pageo8">제주시&전국팔도 테니스최강자전</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <a
                href="http://www.naver.com"
                style={{ textDecorationLine: "line-through" }}
              >
                경기도 1회 테니스랭킹전
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <a
                href="http://www.naver.com"
                style={{ textDecorationLine: "line-through" }}
              >
                경상북도 1회 테니스랭킹전
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <a
                href="http://www.naver.com"
                style={{ textDecorationLine: "line-through" }}
              >
                경상도 1회 테니스랭킹전
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <a
                href="http://www.naver.com"
                style={{ textDecorationLine: "line-through" }}
              >
                전국체전 봉황기 테니스대회
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <a
                href="http://www.naver.com"
                style={{ textDecorationLine: "line-through" }}
              >
                전국체전 청룡기 테니스대회
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <a
                href="http://www.naver.com"
                style={{ textDecorationLine: "line-through" }}
              >
                전국체전 백호기 테니스종합대회
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <a
                href="http://www.naver.com"
                style={{ textDecorationLine: "line-through" }}
              >
                장년 전국체전
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <a
                href="http://www.naver.com"
                style={{ textDecorationLine: "line-through" }}
              >
                청소년 전국체전 테니스대회
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <a
                href="http://www.naver.com"
                style={{ textDecorationLine: "line-through" }}
              >
                전국 아마추어 랭킹전
              </a>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default Listm;
