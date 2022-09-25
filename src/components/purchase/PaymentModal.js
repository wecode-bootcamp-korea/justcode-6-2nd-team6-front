import React from 'react';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';

const StyledDialog = styled(Dialog)`
  .payment-wrap {
    position: relative;
    min-width: 560px;
    width: 560px;
    margin: 0 auto;
    height: 100%;
    background-color: #fff;
    padding: 30px 0 75px 0 !important;
    box-sizing: border-box;
    .payment-title {
      height: 40px !important;
      margin: 0 auto;
      padding: 0;
      position: inherit;
      text-align: center !important;
      width: 88.88%;
      font-size: 20px !important;
      color: #333;
    }
    .payment-form {
      width: 88.88%;
      margin: 0 auto;
      text-align: left;
      border: 1px solid #ebebeb;
      padding-bottom: 20px;
      .payment-form-title {
        height: 70px;
        background-color: #eef2ff;
        position: relative;
        span {
          font-size: 18px;
          line-height: 1.1;
        }
      }
      .payment-form-membership {
        padding: 24px 30px;
        .membership > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .membership > .membership-header > .membership-bi {
          font-size: 16px;
          line-height: 24px;
          color: #333;
        }
        .membership > .membership-policy {
          width: 100%;
          margin-top: 20px;
          .membership-check {
            display: flex;
            align-items: center;
            flex-grow: 1;
            font-size: 13px;
            line-height: 14px;
            .form-check {
              position: relative;
              input {
                position: absolute;
                left: -9999em;
              }
              span {
                color: #333;
                overflow: hidden;
                display: block;
                font-size: 16px;
                padding: 0 0 0 38px;
                min-height: 25px;
                line-height: 25px;
                &::before {
                  content: '';
                  width: 20px;
                  height: 20px;
                  display: block;
                  position: absolute;
                  left: 0;
                  top: 2px;
                  background-image: url('../Img/checkbox.png');
                  background-position: 0 0;
                  background-repeat: no-repeat;
                  background-size: 100%;
                }
              }
            }
            .btn-view {
              padding-left: 10px;
              font-size: 13px;
              line-height: 14px;
              letter-spacing: -0.4px;
              color: #989898;
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
      .payment-form-sum {
        padding: 0 30px;
        .list-sum {
          width: 100%;
          list-style: none;
          li {
            width: 100%;
            min-height: 35px;
            color: #333;
            display: table;
            table-layout: auto;
            .th {
              display: table-cell;
              vertical-align: middle;
              padding: 0;
              font-size: 15px;
              color: #aaa;
            }
            .td {
              display: table-cell;
              vertical-align: middle;
              padding: 0;
              font-size: 16px;
              text-align: right;
              em {
                font-style: normal;
              }
            }
            .emColor {
              color: #db2359;
            }
          }
          .final {
            .th {
              color: #333;
              small {
                font-size: 12px;
                color: #989898;
                padding-left: 3px;
              }
            }
            .td {
              font-size: 20px !important;
              color: #3f3fff;
              font-weight: 600;
              .discounted {
                color: #3f3fff;
                font-size: 22px;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
    .payment-option {
      width: 88.88%;
      margin: 0 auto;
      text-align: left;
      padding: 50px 0 30px 0;
      .payment-option-title {
        font-size: 16px;
        color: #181818;
        font-weight: 600;
        height: 30px;
      }
      .options-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 -5px 15px;
        // 버튼 눌렀을 때 나오는 효과!
        /* .btn-selected {
          border: 1px solid #3f3fff !important;
          color: #3f3fff;
          font-weight: 600;
        } */
        button {
          width: calc(49.6499% - 10px);
          height: 52px;
          margin: 0 5px 10px 5px;
          line-height: 16px;
          vertical-align: middle;
          font-size: 14px;
          background-color: #fff;
          color: #9d9d9d;
          .pay-img {
            display: inline-block;
            vertical-align: middle;
            color: transparent;
            font-size: 0;
            text-indent: 100%;
            overflow: hidden;
            background-size: 100% auto;
            background-repeat: no-repeat;
          }
          .btn-naverpay {
            width: 60px;
            height: 19px;
            background-image: url('../Img/naverpay.png');
          }
          .btn-kakaopay {
            width: 45px;
            height: 15px;
            margin-top: 1px;
            background-image: url('../Img/kakaopay.png');
          }
        }
      }
      .agree-check-all {
        margin-bottom: 7px;
        padding-bottom: 11px;
        border-bottom: 1px solid #f8f8f8;
        .form-check {
          position: relative;
          input {
            position: absolute;
            left: -9999em;
          }
          span {
            font-size: 12.8px;
            color: #181818;
            overflow: hidden;
            display: block;
            padding: 0 0 0 38px;
            min-height: 25px;
            line-height: 25px;
            &::before {
              content: '';
              width: 20px;
              height: 20px;
              display: block;
              position: absolute;
              left: 0;
              top: 2px;
              background-image: url('../Img/checkbox.png');
              background-position: 0 0;
              background-repeat: no-repeat;
              background-size: 100%;
            }
          }
        }
      }
      ul {
        list-style: none;
        li {
          position: relative;
          padding: 7px 0;
          width: 100%;
          font-weight: 500;
          .form-check {
            position: relative;
            input {
              position: absolute;
              left: -9999em;
            }
            span {
              font-size: 12.8px;
              color: #181818;
              overflow: hidden;
              display: block;
              padding: 0 0 0 38px;
              min-height: 25px;
              line-height: 25px;
              &::before {
                content: '';
                width: 20px;
                height: 20px;
                display: block;
                position: absolute;
                left: 0;
                top: 2px;
                background-image: url('../Img/checkbox.png');
                background-position: 0 0;
                background-repeat: no-repeat;
                background-size: 100%;
              }
            }
          }
        }
        .has-view > .form-check span {
          padding-right: 80px;
          .mandatory {
            color: #3f3fff;
            font-style: none;
          }
        }
        .has-view > .btn-view {
          position: absolute;
          top: 10.4px;
          right: 0;
          font-size: 12.8px;
          color: #929292;
          text-decoration: none;
          span {
            display: block !important;
            text-decoration: underline;
            font-size: 14px;
          }
        }
      }
    }
    .pass-notice {
      text-align: left;
      width: 88.88%;
      margin: 0 auto;
      .notice-title {
        height: 23px;
        color: #181818;
        font-size: 13px;
      }
    }
    .btn-wrap {
      z-index: 2;
      a {
        height: 100%;
        font-size: 16px;
        font-weight: 600;
        line-height: 60px;
        text-align: center;
        border: 0;
        span {
          color: #fff;
          font-size: 18px;
        }
      }
    }
    .bottom-fixed {
      width: 500px;
      height: 62px;
      margin: 0 auto 30px auto;
      display: block;
      position: static;
      left: auto;
      right: auto;
      bottom: auto;
      a {
        width: 248px;
        margin: 0 auto;
        display: inline-block;
      }
      .btn-cancel-pay {
        float: left;
        background-color: #7f7f7f;
        color: #fff;
        span {
          opacity: 1;
        }
      }
      .btn-pay {
        float: right;
        span {
          opacity: 0.3;
        }
      }
    }
  }
`;

const PaymentModal = () => {
  return (
    <StyledDialog>
      <div className='payment-wrap'>
        <h1 className='payment-title'>이용권 구매</h1>
        <div className='payment-form'>
          <h3 className='payment-form-title'>
            <span>무제한 듣기+오프라인 재생 정기결제</span>
          </h3>
          <div className='payment-form-membership'>
            <div className='membership'>
              <div className='membership-header'>
                <p className='membership-bi'>T멤버십 적용</p>
              </div>
              <div className='membership-policy'>
                <div className='membership-check'>
                  <label for='checkPolicy' className='form-check'>
                    <input id='checkPolicy' type='checkbox'></input>
                    <span>개인정보 제3자 제공 동의</span>
                  </label>
                  <a target='_blank' className='btn-view'>
                    보기
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='payment-form-sum'>
            <ul className='list-sum'>
              <li>
                <span className='th'>기본 결제 금액</span>
                <span className='td'>
                  <em>11,000</em>원
                </span>
              </li>
              <li>
                <span className='th emColor'>할인적용</span>
                <span className='td emColor'>
                  <em>-100</em>원
                </span>
              </li>
              <li className='final'>
                <span className='th'>
                  최종 결제금액 <small>(VAT10%포함)</small>
                </span>
                <span className='td price'>
                  <span className='discounted'>
                    <em>11,900</em>원
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className='payment-option'>
          <h3 className='payment-option-title'>결제방법</h3>
          <div className='options-list'>
            <button type='button' className='btn-selected'>
              <span className='btn-naverpay pay-img'>Naver Pay</span>
            </button>
            <button type='button' className='btn-selected'>
              <span className='btn-kakaopay pay-img'>Kakao Pay</span>
            </button>
            <button type='button' className='btn-selected'>
              <span>신용/체크카드</span>
            </button>
            <button type='button' className='btn-selected'>
              <span>휴대폰(공통)</span>
            </button>
            <button type='button' className='btn-selected'>
              <span>휴대폰(SKT)</span>
            </button>
          </div>
          <p className='agree-check-all'>
            <label for='paymentAgreeAll' className='form-check'>
              <input id='paymentAgreeAll' type='checkbox'></input>
              <span>아래 내용에 모두 확인, 동의 합니다.</span>
            </label>
          </p>
          <ul>
            <li className='has-view'>
              <label for='check0' className='form-check'>
                <input id='check0' type='checkbox'></input>
                <span>
                  <em className='mandatory'>(필수)</em>상기 결제내역과 이용약관
                  및 하단 유의사항에 동의합니다.
                </span>
              </label>
              <a href='#' className='txtBtn btn-view' target='_blank'>
                <span>약관확인</span>
              </a>
            </li>
            <li>
              <label for='check1' className='form-check'>
                <input id='check1' type='checkbox'></input>
                <span>
                  <em className='mandatory'>(필수)</em>본 이용권은 결제
                  시점으로부터 1개월의 사용기간을 기준으로 하는 월 단위
                  상품으로, 결제하신 이용권의 사용기간을 기준으로 하는 월 단위
                  상품으로, 결제하신 이용권의 사용기간 만료일자 1일 전 별도의
                  고지 없이 자동 정기 결제 되는 것에 동의합니다.
                </span>
              </label>
            </li>
          </ul>
        </div>
        <div className='pass-notice'>
          <h3 className='notice-title'>유의사항</h3>
        </div>
        <div className='btn-wrap bottom-fixed'>
          <a className='btn-cancel-pay'>
            <span>결제취소</span>
          </a>
          <a className='btn-pay'>
            <span>결제하기</span>
          </a>
        </div>
      </div>
    </StyledDialog>
  );
};

export default PaymentModal;
