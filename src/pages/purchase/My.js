import React from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const StyledMy = styled.div`
  .my-wrap {
    padding-top: 40px;
    /* 로그인 X 경우 */
    .full-msg {
      position: relative;
      min-height: 410px;
      width: 100%;
      height: 500px;
      box-sizing: border-box;
      .full-msg-cnt {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        width: auto;
        transform: translate(-50%, -50%);
        .text-black {
          font-size: 20px;
          font-weight: 600;
          color: #181818;
          line-height: 1.3;
          margin-bottom: 7px;
        }
        .text-gray {
          color: #989898;
          font-size: 15px;
          line-height: 1.4;
        }
        .full-msg-btn {
          padding-top: 28px;
          width: 100%;
          span {
            width: auto;
            height: 38px;
            margin: 0 auto;
            padding: 11px 18px;
            color: #3f3fff;
            border: 1px solid #3f3fff;
            border-radius: 19px;
            font-size: 14px;
            font-weight: 600;
            line-height: 38px;
          }
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    /* 로그인 O - 이용권 구매O 경우 */
    .now-voucher-wrap {
      display: block;
      .my-voucher-section {
        .my-section-title {
          margin-bottom: 12px;
          color: #333;
          font-size: 14px;
          font-weight: 500;
          a {
            text-decoration: none;
            color: #333;
            .ico-arrow {
              color: #929292;
              font-size: 11px;
              padding-left: 3px;
              vertical-align: middle;
            }
          }
        }
        .voucher-card {
          margin-top: 0;
          /* 공통css */
          .voucher-card-item {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            min-height: 200px;
            margin-bottom: 20px;
            padding: 50px 60px;
            background-color: #f4f5f8;
            border-radius: 8px;
            box-sizing: border-box;
            .card-left {
              margin-right: 14px;
              .name {
                margin-top: 4px;
                font-size: 20px;
                font-weight: 600;
                line-height: 1.2;
              }
              .voucher-label {
                position: absolute;
                top: 50px;
                right: 50px;
                padding: 5px 6px 2px;
                font-size: 12px;
                line-height: 1.2;
                border: 1px solid #9c9c9c;
                border-radius: 15px;
              }
            }
            .card-right {
              flex: 1;
              padding-left: 49px;
              align-self: center;
              border-left: 1px solid rgba(0, 0, 0, 0.2);
              .voucher-info-list {
                margin-top: 7px;
                li {
                  position: relative;
                  font-size: 12px;
                  .th {
                    min-width: 43px;
                    max-width: 57px;
                    margin-right: 10px;
                    font-size: 12px;
                  }
                  .td {
                    font-size: 12px;
                    line-height: 22px;
                  }
                }
              }
            }
            .msg-novoucher {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 100%;
              text-align: center;
              box-sizing: border-box;
              span {
                color: #000;
                font-size: 18px;
                font-weight: 500;
                line-height: 30px;
              }
            }
          }
          /* 사용 중인 이용권 */
          .voucher-card-using {
            background-color: #525cfd;
            min-height: 210px;
            .card-left {
              width: 420px;
              padding-bottom: 80px;
              .name {
                color: #fff;
              }
              .voucher-label {
                opacity: 0.7;
                border-color: #fff;
                color: #fff;
              }
              .etc-area {
                position: absolute;
                left: 60px;
                bottom: 48px;
                .link-layer {
                  padding-top: 15px;
                  font-size: 12px;
                  color: #fff;
                  background-color: transparent;
                  border-color: #fff;
                  border: none;
                  border-bottom: 1px solid rgba(24, 24, 24, 0.7);
                  &:hover {
                    cursor: pointer;
                  }
                }
              }
            }
            .card-right {
              border-color: hsla(0, 0%, 100%, 0.07);
              .voucher-info-list .th {
                color: hsla(0, 0%, 100%, 0.6);
              }
              .voucher-info-list .td {
                color: #fff;
              }
            }
          }
          /* 사용 대기 중인 이용권 */
          .voucher-card-list {
            list-style: none;
            li > .voucher-card-waiting {
              .card-left {
                width: 420px;
                padding-bottom: 40px;
                a {
                  text-decoration: none;
                  .name {
                    color: #000;
                    .ico-arrow-right {
                      margin-top: -2px;
                      vertical-align: middle;
                    }
                  }
                }
              }
              .card-right .th {
                color: #999;
              }
              .card-right .td {
                color: #555;
                .btn-underlink {
                  text-decoration: underline;
                  font-size: 12px;
                  margin-left: 10px;
                  vertical-align: middle;
                  line-height: 1;
                  border: none;
                  u {
                    text-decoration: underline;
                  }
                  &:hover {
                    cursor: pointer;
                  }
                }
                .color-blue {
                  color: #3f33ff !important;
                }
              }
            }
          }
        }
      }
    }
  }
`;

const My = () => {
  const navigate = useNavigate();

  // {token} 적용해야 함.
  return (
    <StyledMy>
      <div className='my-wrap'>
        {'!토큰' ? (
          <div className='full-msg'>
            <div className='full-msg-cnt'>
              <strong className='text-black'>로그인해주세요.</strong>
              <span className='text-gray'>
                로그인하시면 더욱 더 다양한
                <br />
                FLOrida를 즐길 수 있어요.
              </span>
              <div
                className='full-msg-btn'
                onClick={() => {
                  navigate('/login');
                }}
              >
                <span>로그인</span>
              </div>
            </div>
          </div>
        ) : (
          <div className='now-voucher-wrap'>
            <section className='my-voucher-section'>
              <h3 className='my-section-title'>사용 중인 이용권</h3>
              <div className='voucher-card'>
                <div className='voucher-card-item voucher-card-using'>
                  <div className='card-left'>
                    <h4 className='name'>무제한 듣기 정기결제</h4>
                    <span className='voucher-label'>사용 중</span>
                    <div className='etc-area'>
                      <button type='button' className='link-layer'>
                        이용권 관리
                      </button>
                    </div>
                  </div>
                  <div className='card-right'>
                    <ul className='voucher-info-list'>
                      <li>
                        <span className='th'>사용기간</span>
                        <span className='td'>2022.10.23 23:59:59 까지</span>
                      </li>
                      <li>
                        <span className='th'>구매출처</span>
                        <span className='td'>FLOrida</span>
                      </li>
                      <li>
                        <span className='th'>결제설정</span>
                        <span className='td'>카카오페이</span>
                      </li>
                      <li>
                        <span className='th'>결제수단</span>
                        <span className='td'>카카오페이</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className='my-voucher-section'>
              <h3>사용 대기 이용권</h3>
              <div className='voucher-card'>
                <ul className='voucher-card-list'>
                  <li>
                    <div className='voucher-card-item voucher-card-waiting'>
                      <div className='card-left'>
                        <a href='#'>
                          <h4 className='name'>
                            무제한 듣기 정기결제
                            <FaChevronRight className='ico-arrow-right' />
                          </h4>
                          <p className='desc'></p>
                        </a>
                        <span className='voucher-label'>결제예정</span>
                      </div>
                      <div className='card-right'>
                        <ul className='voucher-info-list'>
                          <li>
                            <span className='th'>사용기간</span>
                            <span className='td'>2022-10-24 ~ 2022-11-23</span>
                          </li>
                          <li>
                            <span className='th'>구매출처</span>
                            <span className='td'>FLOrida</span>
                          </li>
                          <li>
                            <span className='th'>결제설정</span>
                            <span className='td'>정기결제</span>
                          </li>
                          <li>
                            <span className='th'>결제수단</span>
                            <span className='td'>
                              카카오페이
                              <button
                                type='button'
                                className='btn-underlink color-blue'
                              >
                                <u>결제수단관리</u>
                              </button>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section className='my-voucher-section'>
              <h3 className='my-section-title'>
                <a href='#' role='button'>
                  사용 완료된 이용권
                  <FaChevronUp className='ico-arrow' />
                </a>
              </h3>
              <div className='voucher-card'>
                <div className='voucher-card-item'>
                  <div className='msg-novoucher'>
                    <span>사용 완료 내역이 없습니다.</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </StyledMy>
  );
};

export default My;
