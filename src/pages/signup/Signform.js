import React, { useState } from "react";
import styled from "styled-components";

const StyledSignform = styled.div`
  input[type="text"] {
    height: 50px;
    margin-bottom: 50px;
    border: none;
    border-bottom: 1px solid #eee;
  }
  input[type="password"] {
    height: 50px;
    margin-bottom: 50px;
    border: none;
    border-bottom: 1px solid #eee;
  }
  select {
    width: 200px;
    height: 50px;
    border: none;
    border-bottom: 1px solid #eee;
  }
  .signform-inner-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1280px;
    padding: 100px;
    margin: 0 auto;
    .signform-logo-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 300px;
      margin-top: 100px;
      img {
        width: 100%;
      }
    }
    .signform-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 60%;
      height: 100%;
      border: 1px solid #eee;
      padding-top: 0px;
      padding: 0px;
      margin: 0 auto;
      /* 제목 */
      .signform-title-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        .signform-title-text {
          width: 100%;
          margin-top: 50px;
          margin-bottom: 20px;
          text-align: center;
          font: bold 30px/1 "apple";
        }
        .signform-sub-text {
          font: 16px/1 "apple";
          color: #444;
          margin-bottom: 70px;
        }
      }
      /* form박스 - 이메일 */
      .email-box {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        input[type="text"] {
          width: 200px;
          margin-right: 20px;
        }
        span {
          font: 18px/1 "apple";
          margin-right: 20px;
        }
        .id-error {
          display: none;
          position: absolute;
          left: 95px;
          top: 60px;
          font: 12px/1 "apple";
          color: red;
        }
      }

      /* form박스 - 비밀번호 */
      .password-box {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        input[type="password"] {
          width: 460px;
        }
        .pwd-text {
          position: absolute;
          top: 60px;
          left: 0%;
          font: 12px/1 "apple";
          color: #000;
        }
        .pwd-access {
          display: none;
          position: absolute;
          top: 60px;
          left: 0%;
          font: 12px/1 "apple";
          color: #3f3fff;
        }
        .pwd-unacces {
          display: none;
          position: absolute;
          top: 160px;
          left: 0;
          font: 12px/1 "apple";
          color: red;
        }
        .re-pwd-access {
          display: none;
          position: absolute;
          top: 160px;
          left: 0%;
          font: 12px/1 "apple";
          color: #3f3fff;
        }
      }

      /* form박스 - 주민번호 */
      .birthday {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        input[type="text"] {
          padding-left: 10px;
          width: 200px;
          margin-right: 20px;
        }
        span {
          font: 18px/1 "apple";
          margin-right: 20px;
        }
        .bullet {
          position: absolute;
          right: 130px;
          top: 12px;
          font: bold 25px/1 "apple";
        }
      }
      /* 본인인증 버튼 */
      .signform-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 50px;
        margin-bottom: 50px;
        background-color: #ccc;
        color: #fff;
      }
      /* 클레스명이 변경됬을때 표시되는 CSS */
      .signform-btn-on {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 50px;
        margin-bottom: 50px;
        background-color: #3d40ff;
        color: #fff;
      }
    }
  }
`;

const Signform = () => {
  const [userName, setUserName] = useState("김플로");
  const [userPhone, setUserPhone] = useState("01000000000");
  return (
    <StyledSignform>
      <div className="signform-inner-box">
        {/* 로고박스 */}
        <a className="signform-logo-box">
          <img src="/Images/logo.png" alt="플로리다로고" />
        </a>
        <div className="signform-container">
          {/* 제목 */}
          <div className="signform-title-box">
            <div className="signform-title-text">
              <span>회원가입</span>
            </div>
            <div className="signform-sub-text">
              <span>이름 : {userName} / </span>
              <span> 휴대폰 번호 : {userPhone} </span>
            </div>
          </div>
          {/* form박스 - 이메일 */}
          <div className="email-box">
            <div className="signform-form-box">
              <input type="text" placeholder="아이디(이메일)" /> <span>@</span>
              <span className="id-error">올바른 이메일 형식이 아닙니다.</span>
              <select name="email" id="email">
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="daum.net">daum.net</option>
                <option value="nate.com">nate.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="lycos.co.kr">lycos.co.kr</option>
                <option value="empal.com">empal.com</option>
                <option value="cyworld.com">cyworld.com</option>
                <option value="yahoo.co.kr">yahoo.co.kr</option>
                <option value="paran.com">paran.com</option>
                <option value="dreamwiz.com">dreamwiz.com</option>
                <option value="직접입력">직접입력</option>
              </select>
            </div>
          </div>

          {/* form박스 - 비밀번호 */}
          <div className="password-box">
            <input type="password" placeholder="비밀번호" name="pwd" id="pwd" />
            {/* 기본으로 보여줄 PW 조건 */}
            <span className="pwd-text">
              영문 대문자/소문자/숫자/특수문자 섞어 2가지 조합으로
              <br />
              최소 6~15 자리로 입력해주세요
            </span>
            {/* 조건에 부합했을떄 뜨는 text */}
            <span className="pwd-access">사용 가능한 비밀번호입니다.</span>
            <input
              type="password"
              placeholder="비밀번호 재확인"
              name="re-pwd"
              id="re-pwd"
            />
            {/* 비밀번호가 맞지않을경우 text */}
            <span className="pwd-unacces">
              앗! 비밀번호가 일치하지 않습니다.
            </span>
            {/* 비밀번호가 일치했을때 text */}
            <span className="re-pwd-access">비밀번호가 일치합니다..</span>
          </div>

          {/* form박스 - 주민번호 */}
          <div className="birthday">
            <input type="text" placeholder="생년월일 (ex.880101)" />
            <span>-</span>
            <input type="text" />
            <span className="bullet">••••••</span>
          </div>

          <a href="/" className="signform-btn">
            가입 완료
          </a>
        </div>
      </div>
    </StyledSignform>
  );
};

export default Signform;
