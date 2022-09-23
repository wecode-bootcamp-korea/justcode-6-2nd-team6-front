import React from "react";
import styled from "styled-components";

const StyledDetailedInfo = styled.section`
  padding-top: 40px;

  div.detailed-info-inner-box {
    padding-left: 20px;

    div.detailed-info-wrap {
      overflow: hidden;
      white-space: pre-wrap;

      ul.detailed-info-list-box {
        font-size: 18px;
        color: #3d3d3d;

        li.detailed-info-list {
          padding: 15px 0;
        }

        span.detailed-info-album-name {
          font-weight: 600;
        }

        span.stick {
          padding: 0 15px;
        }
      }
    }
  }
`;

const DetailedInfo = () => {
  return (
    <StyledDetailedInfo>
      <div className="detailed-info-inner-box">
        <div className="detailed-info-wrap">
          <ul className="detailed-info-list-box">
            <li className="detailed-info-list">
              <span className="detailed-info-album-name">앨범명</span>
              <span className="stick" />
              <span className="detailed-info-album-singer">007</span>
            </li>
            <li className="detailed-info-list">
              <span className="detailed-info-album-name">아티스트</span>
              <span className="stick" />
              <span className="detailed-info-album-singer">Tabber</span>
            </li>
            <li className="detailed-info-list">
              <span className="detailed-info-album-name">발매사</span>
              <span className="stick" />
              <span className="detailed-info-album-singer">Dreamus</span>
            </li>
            <li className="detailed-info-list">
              <span className="detailed-info-album-name">기획사</span>
              <span className="stick" />
              <span className="detailed-info-album-singer">딩고뮤직</span>
            </li>
          </ul>
        </div>
      </div>
    </StyledDetailedInfo>
  );
};

export default DetailedInfo;
