import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledPurchase = styled.div`
  .purchase-inner-box {
    display: flex;
    flex-direction: column;
    width: 955px;
    max-width: 1600px;
    min-width: 800px;
    position: relative;
    margin: 0 auto;
    padding-top: 50px;
    .purchase-tab {
      display: flex;
      justify-content: center;
      position: relative;
      margin-right: 50px;
      height: 32px;
      div {
        margin: 0 15px;
        padding: 7px 12px;
        vertical-align: top;
        font-weight: 600;
        color: black;
        /* 해당 탭에만 적용되는 style */
        /* color: white;
        background-color: #3f3fff; */
        border: none;
        border-radius: 16px;
        &:hover {
          color: blue;
          cursor: pointer;
        }
      }
    }
    .purchase-coupon {
      position: absolute;
      top: 50px;
      right: 40px;
      color: #000;
      width: auto;
      z-index: 15;
      .btn-coupon {
        width: 97px;
        height: 32px;
        font-size: 13px;
        color: #000;
        background-color: transparent;
        border: 0.5px solid #d2d2d2;
        border-radius: 16px;
        &:hover {
          color: blue;
          border-color: blue;
          cursor: pointer;
        }
      }
    }
  }
`;

const Purchase = () => {
  return (
    <StyledPurchase>
      <div className='purchase-inner-box'>
        <div className='purchase-tab'>
          <Link to='/purchase/voucher'>
            <div className='purchase-voucher'>이용권</div>
          </Link>
          <Link to='/purchase/affliate'>
            <div className='purchase-affiliate'>제휴</div>
          </Link>
          <Link to='/purchase/my'>
            <div className='purchase-my'>MY</div>
          </Link>
        </div>
        <div className='purchase-coupon'>
          <button type='button' className='btn-coupon'>
            쿠폰
          </button>
        </div>
        <Outlet />
      </div>
    </StyledPurchase>
  );
};

export default Purchase;
