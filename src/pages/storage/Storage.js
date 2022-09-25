import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineHeart, HiHeart } from "react-icons/hi"; // player like

const StyledStorage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
  font-family: "NanumBarunGothic", sans-serif;

  .menu-list {
    display: flex;
    align-items: center;
    border-bottom: 1.5px solid #eeeeee;

    .list {
      display: flex;
      align-items: center;
      padding: 10px;

      .icon {
        margin-right: 3px;
      }
    }
  }
`;

const Storage = () => {
  return (
    <StyledStorage>
      <div className="storage-inner-box">
        <ul className="menu-list">
          <li className={"list"}>내 리스트</li>
          <li className={"list"}>
            <HiOutlineHeart className="icon" size="18" />
            좋아요
          </li>
          <li className={"list"}>많이 들은 곡</li>
          <li className={"list"}>최근 감상</li>
        </ul>
        <Outlet />
      </div>
    </StyledStorage>
  );
};

export default Storage;
