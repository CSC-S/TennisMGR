/*eslint-disable*/
import React, { Component } from "react";
import { Card, Button, Table } from "react-bootstrap";

import 구장3 from "../img/Tennis3.jpg";
import Header from "./Header";

import Footer from "./Footer";
import { Link } from "react-router-dom";
class pageo2 extends Component {
  render() {
    return (
      <div>
          <Header/>
      <div style={{height:"940px",display:'flex', justifyContent: 'center'}}>
        <Card style={{ width: "40rem", height: "50rem" }}>
          <Card.Img variant="top" src={구장3} style={{width:"40rem",height:"680px"}} />
          <Card.Body style={{ padding: 0,width:"640px",height:"200px" }}>
            <Table striped bordered hover style={{height:"100px"}}>
              <thead>
                <tr>
                  <th>대회이름</th>
                  <td colSpan="3">
                    제37회 전국하계대학테니스연맹전 및제13회장기
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>대회장소</th>
                  <td colSpan="3">YOUTUBE'대한테니스협회TV'중계</td>
                </tr>
                <tr>
                  <th>대회날짜</th>
                  <td colSpan="3">2021.7.1~2021.7.4</td>
                </tr>
                <tr>
                  <th>주최및주관</th>
                  <td colSpan="3">대한테니스협회</td>
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
        <Footer></Footer>
      </div>
    );
  }
}

export default pageo2;
