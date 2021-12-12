/*eslint-disable*/
import React, { Component } from "react";
import { Card, Button, Table } from "react-bootstrap";
import 구장9 from "../img/Tennis9.jpg";
import Header from "./Header";

import Footer from "./Footer";
import { Link } from "react-router-dom";
class pageo8 extends Component {
  render() {
    return (
      <div>
         <Header/>
      <div style={{height:"940px",display:'flex', justifyContent: 'center'}}>
        <Card style={{ width: "40rem", height: "50rem" }}>
          <Card.Img variant="top" src={구장9} style={{width:"40rem",height:"680px"}} />
          <Card.Body style={{ padding: 0 ,width:"640px",height:"200px"}}>
            <Table striped bordered hover style={{height:"100px"}}>
              <thead>
                <tr>
                  <th>대회이름</th>
                  <td colSpan="3">
                    전국팔도 테니스최강자전
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>대회장소</th>
                  <td colSpan="3">제주도 돌하르방체육관</td>
                </tr>
                <tr>
                  <th>대회날짜</th>
                  <td colSpan="3">2021.10.20(토) 9:00</td>
                </tr>
                <tr>
                  <th>주최및주관</th>
                  <td colSpan="3">제주시,전국 자치단체</td>
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

export default pageo8;
