import React, { Component } from "react";

import "./style.scss";

class Introduce extends Component {
  render() {
    return (
      <div className="container">
        <img
          className="profile"
          src="https://w.namu.la/s/f02cf4907b68c3c94beba0360de59132e7580748ade8c26c64cde817918ef72bd1c5864586f03dac652a73852deaf3fd880320fd80c087d77d08b010f5efdbcee4ade5d5b1e8acdd20fe30b1aeb35895034ac5c06eaa6ae8a2dcba29244bd3f7"
        />
        <div className="info">
          <span className="title">이름:</span>
          <span className="content">최영훈</span>
        </div>
        <div className="info">
          <span className="title">깃허브:</span>
          <span className="content">https://github.com/jeffchoi72</span>
        </div>
        <div className="info">
          <span className="title">자기소개:</span>
          <span className="content">
            안녕하세요, 좋아하는것만 하는 개발자 최영훈입니다~!
          </span>
        </div>
      </div>
    );
  }
}

export default Introduce;
