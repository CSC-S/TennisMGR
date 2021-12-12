/*eslint-disable*/
import React, { Component } from "react";
import { Card, Button, Table } from "react-bootstrap";
import 구장8 from "../img/Tennis8.jpg";
import Header from "./Header";

import Footer from "./Footer";
import { Link } from "react-router-dom";
class pageo7 extends Component {
  render() {
    return (
      <div>
         <Header/>
      <div style={{height:"940px",display:'flex', justifyContent: 'center'}}>
        <Card style={{ width: "40rem", height: "50rem" }}>
          <Card.Img variant="top" src={구장8} style={{width:"40rem",height:"680px"}} />
          <Card.Body style={{ padding: 0 ,width:"640px",height:"200px"}}>
            <Table striped bordered hover style={{height:"100px"}}>
              <thead>
                <tr>
                  <th>대회이름</th>
                  <td colSpan="3">
                    이근재배 테니스 왕중왕전
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>대회장소</th>
                  <td colSpan="3">강원도 철원군 갈말읍 공설운동장</td>
                </tr>
                <tr>
                  <th>대회날짜</th>
                  <td colSpan="3">2021.6.12(토) 6:12</td>
                </tr>
                <tr>
                  <th>주최및주관</th>
                  <td colSpan="3">(주)이근재 주식회사C</td>
                </tr>

                <tr>
                    <td colSpan="4">
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Link to="/ContestBoard">
                          <Button
                            style={{ marginLeft: "50px", marginRight: "50PX" }}
                          >
                            목록
                          </Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default pageo7;
