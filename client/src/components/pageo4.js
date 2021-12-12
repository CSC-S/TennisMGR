/*eslint-disable*/
import React, { Component } from "react";
import { Card, Button, Table } from "react-bootstrap";

import 구장5 from "../img/Tennis5.jpg";
import Header from "./Header";

import Footer from "./Footer";
import { Link } from "react-router-dom";
class pageo4 extends Component {
  render() {
    return (
      <div>
          <Header/>
      <div style={{height:"940px",display:'flex', justifyContent: 'center'}}>
        <Card style={{ width: "40rem", height: "50rem" }}>
          <Card.Img variant="top" src={구장5} style={{width:"40rem",height:"680px"}} />
          <Card.Body style={{ padding: 0,width:"640px",height:"200px" }}>
            <Table striped bordered hover style={{height:"100px"}}>
              <thead>
                <tr>
                  <th>대회이름</th>
                  <td colSpan="3">6월 남자부 궁천테니스대회</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>대회장소</th>
                  <td colSpan="3">
                    남양주 화도 궁촌테니스장(화도읍 녹촌리195-2)
                  </td>
                </tr>
                <tr>
                  <th>대회날짜</th>
                  <td colSpan="3">2021.6.5(토) 16:00~</td>
                </tr>
                <tr>
                  <th>주최및주관</th>
                  <td colSpan="3">궁촌 테니스장</td>
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

export default pageo4;
