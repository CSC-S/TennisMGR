/*eslint-disable*/
import React, { Component } from "react";
import { Card, Button, Table } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

import 구장2 from "../img/Tennis2.jpg";
import { Link } from "react-router-dom";

class pageo1 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div
          style={{ height: "940px", display: "flex", justifyContent: "center" }}
        >
          <Card style={{ width: "40rem", height: "50rem" }}>
            <Card.Img
              variant="top"
              src={구장2}
              style={{ width: "40rem", height: "680px" }}
            />
            <Card.Body style={{ padding: 0, width: "640px", height: "200px" }}>
              <Table striped bordered hover style={{ height: "100px" }}>
                <thead>
                  <tr>
                    <th>대회이름</th>
                    <td colSpan="3">
                      2021 ITF IMG 오산국제주니어 테니스 투어대회
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>대회장소</th>
                    <td colSpan="3">오산시립테니스장(청학동149)</td>
                  </tr>
                  <tr>
                    <th>대회날짜</th>
                    <td colSpan="3">2021.11.13~11.20</td>
                  </tr>
                  <tr>
                    <th>주최및주관</th>
                    <td colSpan="3">
                      대한테니스협회(KTA),엠버서더 컵 조직위원회
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4">
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Link to="/ContestBoard">
                          <Button
                            style={{ marginLeft: "60px", marginRight: "50px" }}
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
        <Footer />
      </div>
    );
  }
}

export default pageo1;
