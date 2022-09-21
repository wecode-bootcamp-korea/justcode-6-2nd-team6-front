import React from 'react';
import styled from 'styled-components';
import banner from '../../Images/banner.png';
import nextarrow from '../../Images/next.png';

const StyledVoucher = styled.div`
  .voucher-wrap {
    padding: 40px;
    .voucher-cardlist {
      list-style: none;
      li {
        list-style: none;
        .voucher-carditem {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          min-height: 200px;
          margin-bottom: 20px;
          padding: 50px 60px;
          background-color: #f4f5f8;
          border-radius: 8px;
          .card-left {
            width: 310px;
            margin-right: 14px;
            padding-bottom: 40px;
            .name {
              margin-top: 4px;
              font-size: 20px;
              line-height: 1.2;
              color: black;
              font-weight: 600;
            }
            .desc {
              margin-top: 5px;
              font-size: 13px;
              line-height: 20px;
              color: #555;
            }
          }
          .card-right {
            flex: 1;
            padding-left: 49px;
            align-self: center;
            .voucher-list-sub {
              list-style: none;
              li {
                margin: 30px 0;
                .item {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin-bottom: 0;
                  .item-left {
                    flex: 0 1 auto;
                    text-align: left;
                    .subject {
                      font-size: 16px;
                      font-weight: 600;
                      color: #181818;
                    }
                  }
                  .item-right {
                    flex: 1 0 auto;
                    text-align: right;
                    margin-left: 10px;
                    .price-box {
                      display: inline-block;
                      line-height: 1.2;
                      .first-cost {
                        margin-right: 10px;
                        font-size: 12px;
                        color: #bdbdbd;
                        vertical-align: middle;
                        text-decoration: line-through;
                      }
                      .price {
                        font-size: 22px;
                        color: #3f3fff;
                        vertical-align: middle;
                      }
                      .color-red {
                        color: #e61313 !important;
                      }
                    }
                    .btn-buy {
                      margin-left: 20px;
                      padding: 5px 17px;
                      text-align: center;
                      font-size: 14px;
                      color: #fff;
                      background-color: #3f3fff;
                      border: none;
                      border-radius: 22px;
                      box-sizing: border-box;
                      &:hover {
                        cursor: pointer;
                      }
                    }
                  }
                }
              }
            }
          }
          .btn-detail {
            position: absolute;
            bottom: 57px;
            left: 57px;
            font-size: 13px;
            color: #929292;
            background-color: transparent;
            border: none;
            .next-arrow-img {
              position: absolute;
              bottom: 2px;
              width: 15px;
              height: 15px;
              vertical-align: middle;
              color: #929292;
              opacity: 0.5;
            }
            &:hover {
              cursor: pointer;
            }
          }
        }
        /* Banner 부분 */
        .voucher-banner {
          padding: 0;
          background-color: rgb(150, 105, 232);
          .voucher-banner-img {
            width: 100%;
            height: 100%;
          }
          .voucher-banner-item {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 0 165px;
            margin-top: 5px;
            box-sizing: border-box;
            .card-left {
              flex: 0 1 auto;
              width: auto;
              margin: 0;
              padding: 0;
              .name {
                color: #fff;
                font-size: 18px;
              }
            }
            .card-right {
              flex: 0 0 auto;
              margin-left: 19px;
              padding-left: 0;
              border: 0;
              .voucher-list-sub {
                list-style: none;
                li {
                  .item {
                    text-align: center;
                    .item-right {
                      flex: 0 1 auto;
                      text-align: right;
                      .btn-buy {
                        margin: 0 10px;
                        text-align: center;
                        padding: 5px 17px;
                        font-size: 14px;
                        color: #fff;
                        background-color: #3f3fff;
                        border: none;
                        border-radius: 22px;
                        &:hover {
                          cursor: pointer;
                        }
                      }
                      .price-box > .first-cost {
                        font-size: 12px;
                        margin: 0 5px;
                        color: hsla(0, 0%, 100%, 0.7);
                        text-decoration: line-through;
                      }
                      .price-box > .price {
                        font-size: 22px;
                        color: white;
                      }
                    }
                  }
                }
              }
            }
            .btn-detail {
              position: absolute;
              bottom: auto;
              right: 40px;
              left: auto;
              font-size: 12px;
              background-color: transparent;
              color: white;
              border: none;
              .next-arrow-img {
                position: absolute;
                top: 2px;
                width: 15px;
                height: 15px;
                vertical-align: middle;
                color: white;
              }
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .pass-notice {
      padding-top: 30px;
      text-align: left;
      width: 955px;
      .notice-title {
        height: 25px;
        color: #222;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
`;

const Voucher = () => {
  return (
    <StyledVoucher>
      <div className='voucher-wrap'>
        <ul className='voucher-cardlist'>
          <li>
            <div className='voucher-carditem voucher-banner'>
              <img alt='베너홍보' src={banner} className='voucher-banner-img' />
              <div className='voucher-banner-item'>
                <div className='card-left'>
                  <h3 className='name'>(첫 구매) 무제한 듣기 정기결제</h3>
                </div>
                <div className='card-right'>
                  <ul className='voucher-list-sub'>
                    <li>
                      <div className='item'>
                        <div className='item-right'>
                          <span className='price-box'>
                            <del className='first-cost'>정가 8,000원</del>
                            <span className='price'>
                              <em>100</em>원
                            </span>
                          </span>
                          <button type='button' className='btn-buy'>
                            구매
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <button type='button' className='btn-detail'>
                  이용권 자세히보기
                  <img
                    alt='화살표'
                    src={nextarrow}
                    className='next-arrow-img'
                  />
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className='voucher-carditem'>
              <div className='card-left'>
                <h3 className='name'>무제한 듣기+오프라인 재생</h3>
                <p className='desc'>
                  기기제한 없음, 무제한 스트리밍, 오프라인 재생
                </p>
              </div>
              <div className='card-right'>
                <ul className='voucher-list-sub'>
                  <li>
                    <div className='item'>
                      <div className='item-left'>
                        <span className='subject'>정기결제</span>
                      </div>
                      <div className='item-right'>
                        <span className='price-box'>
                          <del className='first-cost'>정가 11,000원</del>
                          <span className='price'>
                            <em>10,900</em>원
                          </span>
                        </span>
                        <button type='button' className='btn-buy'>
                          구매
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item-left'>
                        <span className='subject'>첫 달 100원</span>
                      </div>
                      <div className='item-right'>
                        <span className='price-box'>
                          <del className='first-cost'>정가 10,900원</del>
                          <span className='price color-red'>
                            <em>100</em>원
                          </span>
                        </span>
                        <button type='button' className='btn-buy'>
                          구매
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item-left'>
                        <span className='subject'>1개월 권</span>
                      </div>
                      <div className='item-right'>
                        <span className='price-box'>
                          <span className='price'>
                            <em>11,000</em>원
                          </span>
                        </span>
                        <button type='button' className='btn-buy'>
                          구매
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <button type='button' className='btn-detail'>
                이용권 자세히 보기
                <img alt='화살표' src={nextarrow} className='next-arrow-img' />
              </button>
            </div>
          </li>
          <li>
            <div className='voucher-carditem'>
              <div className='card-left'>
                <h3 className='name'>무제한 듣기</h3>
                <p className='desc'>기기제한 없음, 무제한 스트리밍</p>
              </div>
              <div className='card-right'>
                <ul className='voucher-list-sub'>
                  <li>
                    <div className='item'>
                      <div className='item-left'>
                        <span className='subject'>정기결제</span>
                      </div>
                      <div className='item-right'>
                        <span className='price-box'>
                          <del className='first-cost'>정가 8,000원</del>
                          <span className='price'>
                            <em>7,900</em>원
                          </span>
                        </span>
                        <button type='button' className='btn-buy'>
                          구매
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item-left'>
                        <span className='subject'>첫 달 100원</span>
                      </div>
                      <div className='item-right'>
                        <span className='price-box'>
                          <del className='first-cost'>정가 7,900원</del>
                          <span className='price color-red'>
                            <em>100</em>원
                          </span>
                        </span>
                        <button type='button' className='btn-buy'>
                          구매
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item-left'>
                        <span className='subject'>1개월 권</span>
                      </div>
                      <div className='item-right'>
                        <span className='price-box'>
                          <span className='price'>
                            <em>8,000</em>원
                          </span>
                        </span>
                        <button type='button' className='btn-buy'>
                          구매
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <button type='button' className='btn-detail'>
                이용권 자세히 보기
                <img alt='화살표' src={nextarrow} className='next-arrow-img' />
              </button>
            </div>
          </li>
          <li>
            <div className='voucher-carditem'>
              <div className='card-left'>
                <h3 className='name'>300회 듣기</h3>
                <p className='desc'>기기제한 없음, 횟수 제한</p>
              </div>
              <div className='card-right'>
                <ul className='voucher-list-sub'>
                  <li>
                    <div className='item'>
                      <div className='item-left'>
                        <span className='subject'>1개월권</span>
                      </div>
                      <div className='item-right'>
                        <span className='price-box'>
                          <span className='price'>
                            <em>4,800</em>원
                          </span>
                        </span>
                        <button type='button' className='btn-buy'>
                          구매
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <button type='button' className='btn-detail'>
                이용권 자세히 보기
                <img alt='화살표' src={nextarrow} className='next-arrow-img' />
              </button>
            </div>
          </li>
          <li>
            <div className='voucher-carditem'>
              <div className='card-left'>
                <h3 className='name'>모바일 무제한 듣기</h3>
                <p className='desc'>모바일 전용, 무제한 스트리밍</p>
              </div>
              <div className='card-right'>
                <ul className='voucher-list-sub'>
                  <li>
                    <div className='item'>
                      <div className='item-left'>
                        <span className='subject'>정기결제</span>
                      </div>
                      <div className='item-right'>
                        <span className='price-box'>
                          <del className='first-cost'>정가 7,000원</del>
                          <span className='price'>
                            <em>6,900</em>원
                          </span>
                        </span>
                        <button type='button' className='btn-buy'>
                          구매
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item-left'>
                        <span className='subject'>첫 달 100원</span>
                      </div>
                      <div className='item-right'>
                        <span className='price-box'>
                          <del className='first-cost'>정가 6,900원</del>
                          <span className='price color-red'>
                            <em>100</em>원
                          </span>
                        </span>
                        <button type='button' className='btn-buy'>
                          구매
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='item'>
                      <div className='item-left'>
                        <span className='subject'>1개월 권</span>
                      </div>
                      <div className='item-right'>
                        <span className='price-box'>
                          <span className='price'>
                            <em>7,000</em>원
                          </span>
                        </span>
                        <button type='button' className='btn-buy'>
                          구매
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <button type='button' className='btn-detail'>
                이용권 자세히 보기
                <img alt='화살표' src={nextarrow} className='next-arrow-img' />
              </button>
            </div>
          </li>
        </ul>
        <div className='pass-notice'>
          <h3 className='notice-title'>이용권 유의사항</h3>
        </div>
      </div>
    </StyledVoucher>
  );
};

export default Voucher;
