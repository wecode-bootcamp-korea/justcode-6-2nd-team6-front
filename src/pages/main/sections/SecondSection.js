import React from "react";
import styled from "styled-components";
import next from "../../../Images/next.png";
import prev from "../../../Images/prev.png";

const SecondSection = () => {
  const StyledSection = styled.section`
    width: 100%;
    margin: 0 auto;

    section.second-section-inner-box {
      margin-top: 40px;

      div.second-section-info-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      div.second-section-genre {
        display: flex;
        flex-direction: row;
      }
    }
  `;

  return (
    <StyledSection>
      <section className="second-section-inner-box">
        {/*오늘 발매 음악 정보 */}
        <div className="second-section-info-box">
          {/*오늘 발매 음악 제목 */}
          <div className="second-section-title-box">
            <h3 className="second-section-title">
              <a className="second-section-title-link">
                <span className="second-section-today-music">
                  오늘 발매 음악
                </span>
                <img
                  alt="오늘 발매 음악"
                  className="second-section-title-info"
                  src={next}
                />
              </a>
            </h3>
          </div>
          {/*오늘 발매 음악 장르 */}
          <div className="second-section-genre">
            <div className="second-section-genre-title">
              <button
                alt="종합"
                type="button"
                className="second-section-genre-mix"
              >
                종합
              </button>
              <button
                alt="국내"
                type="button"
                className="second-section-genre-domestic"
              >
                국내
              </button>
              <button
                alt="해외"
                type="button"
                className="second-section-genre-foreign"
              >
                해외
              </button>
            </div>
            {/*오늘 발매 음악 장르 슬라이더 */}
            <div className="second-section-genre-arrow">
              <button type="button" className="second-section-genre-prev">
                <img
                  alt="왼쪽"
                  className="second-section-title-info"
                  src={prev}
                />
              </button>
              <button type="button" className="second-section-genre-next">
                <img
                  alt="오른쪽"
                  className="second-section-title-info"
                  src={next}
                />
              </button>
            </div>
          </div>
        </div>
        {/*오늘 발매 음악 정보 끝 */}
        <div className="second-section-album-wrap">
          <div className="second-section-album-box"></div>
        </div>
      </section>
    </StyledSection>
  );
};

export default SecondSection;
