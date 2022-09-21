import React, { useState, useEffect } from "react";
import styled from "styled-components";
import next from "../../../Images/next.png";
import prev from "../../../Images/prev.png";
import albumCover from "../../../Images/album-cover-2.jpg";
import { BsFillPlayFill } from "react-icons/bs";

const StyledSection = styled.section`
  width: 100%;
  height: 500px;
  margin: 50px auto;
  display: block;

  section.second-section-inner-box {
    div.second-section-info-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    div.second-section-genre {
      display: flex;
      flex-direction: row;
    }

    /* 발매 음악 앨범 리스트 */
    div.second-section-album-wrap {
      display: grid;
      grid-template-columns: 192px 192px 192px 192px;
      grid-template-rows: 200px 200px;
      margin-top: 30px;
    }
    div.second-section-album-box {
      width: 192px;
      background-clip: content-box;

      div.second-section-album-list {
        position: relative;
        margin-bottom: 15px;
      }

      /* 발매 음악 앨범 리스트 앨범 링크 */
      a.second-section-album-link {
        postion: relative;
        z-index: 1;

        div.second-section-album-img-box {
          display: grid;
          postion: relative;
        }
      }

      img.second-section-album-cover {
        width: 192px;
        height: 192px;
        border-radius: 7px;
      }

      /* 발매 음악 앨범 리스트 재생 버튼 */
      button.second-section-play-button {
        position: absolute;
        z-index: 3;
        right: -3px;
        bottom: -5px;
        border: none;
        background: none;

        .second-section-play-button-icon {
          width: 50px;
          height: 50px;
          color: white;
        }
      }
    }
    a.second-section-album-song-link {
      display: block;
      margin-bottom: 8px;
      font-size: large;
    }

    a.second-section-album-singer-link {
      color: #999999;
      font-size: large;
    }
  }
`;

const SecondSection = () => {
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    fetch("/data/releaseData.json")
      .then((res) => res.json())
      .then((data) => {
        setAlbumList(data.releaseData);
      });
  }, []);

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
          {/*앨범리스트*/}
          {albumList.map((result) => {
            return (
              <div key={result.releaseId} className="second-section-album-box">
                <div className="second-section-album-list">
                  <a className="second-section-album-link">
                    <div className="second-section-album-img-box">
                      <img
                        className="second-section-album-cover"
                        src={result.releaseAlbum}
                      />
                    </div>
                  </a>
                  <button
                    alt="플레이 버튼"
                    className="second-section-play-button"
                  >
                    <BsFillPlayFill className="second-section-play-button-icon" />
                  </button>
                </div>
                <a className="second-section-album-song-link">
                  <span className="second-section-song">
                    {result.releaseSong}
                  </span>
                </a>
                <a className="second-section-album-singer-link">
                  <spna className="second-section-album-singer">
                    {result.releaseSinger}
                  </spna>
                </a>
              </div>
            );
          })}
          {/*앨범리스트 끝*/}
        </div>
      </section>
    </StyledSection>
  );
};

export default SecondSection;
