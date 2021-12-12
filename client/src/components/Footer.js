/*eslint-disable*/
import React, { Component } from "react";
import ".././App.css";
import twiter from ".././img/twiter.png";
import facebook from ".././img/facebook.png";
import instargram from ".././img/instargram.png";
import { style } from "dom-helpers";


class Footer extends Component {
  render() {



    return (
  <footer id="footer">
    <div class="footer-container">
      <div class="column">
      <div class="footer-social-icons">
          <a href="https://www.facebook.com/"><img class="snslogo" src={ facebook }/>
            <i class="fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com/"><img class="snslogo" src={ twiter }/>
            <i class="fa fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/"><img class="snslogo" src={ instargram }/>
            <i class="fa fa-instagram"></i>
          </a>
        </div>

        <div class="copyright">
          <span>주소 : 서울시 금천구 가산동 개발타워 </span> | 
          <span> 전화 : 02)123-4567 </span> |
          <span> 메일 : TennisMGR@gmail.com</span>
          <p class='copyright-c'>Copyright 2021.team5.All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
    );
  }
}





export default Footer;
