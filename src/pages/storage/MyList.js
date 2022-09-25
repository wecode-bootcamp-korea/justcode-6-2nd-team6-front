import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const StyledMyList = styled.div`
  .my-list-inner-box {
    display: flex;
    flex-wrap: wrap;
    padding: 80px 0 60px 0;

    .play-list-container {
      display: flex;
      width: 470px;
      margin-right: 20px;
      margin-bottom: 20px;
      /* background-color: #777777; */

      .play-list-cover {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;

        .first-box {
          width: 170px;
          height: 170px;
          border-radius: 5px;
          background-color: #f3f3f3;
        }

        .second-box {
          width: 185px;
          height: 185px;
          margin-top: -167px;
          border-radius: 5px;
          background-color: #e9e9e9;
        }

        .third-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          height: 200px;
          margin-top: -179px;
          border-radius: 5px;
          background-color: #dfdfdf;
          color: #3f3fff;
        }

        .play {
          position: absolute;
          bottom: 25px;
          right: 22.5px;
          color: white;
          transform: scale(1.75);
          cursor: pointer;
        }
      }

      .song-info {
        margin: 30px 20px;

        .title {
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
        }

        .quantity {
          margin: 25px 0 10px 0;
          font-size: 14px;
        }

        .date {
          font-size: 14px;
          color: #969696;
        }

        .add-list {
          margin-top: 70px;
          color: #3f3fff;
          font-weight: 700;
          cursor: pointer;
        }
      }
    }
  }
`;

const MyList = () => {
  return (
    <StyledMyList>
      <div className="my-list-inner-box">
        {mockData.data.map((el, i) => (
          <PlayListContainer key={el.playlistId} data={el} />
        ))}
        <div className="play-list-container">
          <div className="play-list-cover">
            <div className="first-box" />
            <div className="second-box" />
            <div className="third-box">
              <AiOutlinePlus size="50" />
            </div>
          </div>
          <div className="song-info">
            <div className="add-list">새로운 리스트 만들기</div>
          </div>
        </div>
      </div>
    </StyledMyList>
  );
};

const PlayListContainer = ({ data }) => {
  return (
    <div className="play-list-container">
      <div className="play-list-cover">
        <div className="first-box" />
        <div className="second-box" />
        <img src={data.albumImage} className="third-box" />
        <FaPlay className="play" />
      </div>
      <div className="song-info">
        <h2 className="title">{data.title}</h2>
        <div className="quantity">총 {data.songTotalCount} 곡</div>
        <div className="date">{data.createdAt}</div>
      </div>
    </div>
  );
};

export default MyList;

const mockData = {
  data: [
    {
      userId: 1,
      playlistId: 1,
      title: "가을을 기다리는 발라드",
      songTotalCount: "16",
      albumImage:
        "https://images.unsplash.com/photo-1641423914598-288fee6cecf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      createdAt: "2022.09.24",
    },
    {
      userId: 1,
      playlistId: 2,
      title: "가사에 조용히 귀 기울여 듣는 발라드",
      songTotalCount: "17",
      albumImage:
        "https://images.unsplash.com/photo-1587468820439-4c80fa8ec7c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      createdAt: "2022.09.24",
    },
    {
      userId: 1,
      playlistId: 3,
      title: "가을과 어울리는 편안한 감성 모음",
      songTotalCount: "14",
      albumImage:
        "https://images.unsplash.com/photo-1611001440648-e90aff42faa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      createdAt: "2022.09.24",
    },
    {
      userId: 1,
      playlistId: 12,
      title: "요리하면서 듣기 좋은 맛있는 노래 모음",
      songTotalCount: "9",
      albumImage:
        "https://images.unsplash.com/photo-1611001440648-e90aff42faa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      createdAt: "2022.09.24",
    },
  ],
};
