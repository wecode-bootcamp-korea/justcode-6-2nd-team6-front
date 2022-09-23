import styled from '@emotion/styled';
import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';


const StyledBrowseMenu = styled.div`
.BrowseMenu-inner-box{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1280px;
    padding-top: 100px;
    margin: 0 auto;
    margin-bottom: 50px;
    .BrowseMenu-tab-box{
        width: 100%;
        /* 탭리스트 박스 ul */
        .BrowseMenu-tab{
            position: relative;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            align-items: center;
            width: 100%;
            padding-right: 50px;
            li{
                margin-right: 5px;
                margin-bottom: 10px;
            }
            /* 버튼 클릭됬을때 */
            .tab-on{
                a{
                 height: 35px;
                width: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                background-color: #3F3FFF;
                border: none;
                border-radius: 100px;
                font-size: 14px;
                cursor: pointer;
            }
            }
            /* 버튼 클릭안됬을때 */
            .tab-off{ 
               a{
                height: 32px;
                width: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #000;
                background-color: none;
                border: 1px solid #777;
                border-radius: 100px;
               font-size: 14px;
               cursor: pointer;}
            }
            .tab-more-btn-on{
                position: absolute;
                right: 40px;
                top: 3px;
                width: 30px;
                height: 30px;
                margin-right: 30px;
                background-image: url('https://www.music-flo.com/img/sp_button@2x.97bb1f02.png');
                background-size: 714px 706px;
                background-position: -597px -105px;
                background-color: transparent;
                border: none;
                color:transparent;
                &:hover{
                    position: absolute;
                right: 40px;
                top: 3px;
                width: 30px;
                height: 30px;
                margin-right: 30px;
                background-image: url('https://www.music-flo.com/img/sp_button@2x.97bb1f02.png');
                background-size: 714px 706px;
                background-position: -597px -70px;
                background-color: transparent;
                border: none;
                color:transparent;
                }
            }
            .tab-more-btn-off{
                position: absolute;
                right: 40px;
                top: 3px;
                width: 30px;
                height: 30px;
                margin-right: 30px;
                background-image: url('https://www.music-flo.com/img/sp_button@2x.97bb1f02.png');
                background-size: 714px 706px;
                background-position: -597px -210px;
                background-color: transparent;
                border: none;
                color:transparent;
                &:hover{
                    position: absolute;
                right: 40px;
                top: 3px;
                width: 30px;
                height: 30px;
                margin-right: 30px;
                background-image: url('https://www.music-flo.com/img/sp_button@2x.97bb1f02.png');
                background-size: 714px 706px;
                background-position: -597px -175px;
                background-color: transparent;
                border: none;
                color:transparent;
                }
            }
        }
    }
}
`

const Browsemenu = () => {
    const params = useParams();

    const [toggle, setToggle] = useState(false)

    return (
        <StyledBrowseMenu>
            <div className="BrowseMenu-inner-box">
                <div className="BrowseMenu-tab-box">
                    {/* 탭 리스트 */}
                    <ul className="BrowseMenu-tab">
                        {['추천차트', '해외 소셜 차트', '국내 발라드', '해외 팝', '국내 댄스', '국내 알앤비', '국내 힙합', '트로트', '해외 알앤비', '해외힙합', 'OST'].map((tab) => {
                            return (
                                <li key={tab} className={params.category === tab ? "tab-on" : "tab-off"}>
                                    <NavLink to={`/browse/${tab}`}>{tab}</NavLink>
                                </li>
                            )
                        })}

                        {/* 목록 펼치기 버튼 */}
                        <button onClick={() => { setToggle(!toggle) }} className={toggle === true ? 'tab-more-btn-on' : 'tab-more-btn-off'}>{toggle === true ? <spna className="hidden">차트 카테고리 목록 펼치기</spna> : <span className="hidden">차트 카테고리 목록 접기</span>}</button>

                        {/* 추가 탭 리스트 */}
                        {toggle === true ? <Addtab /> : null}
                    </ul>
                </div>
            </div>
        </StyledBrowseMenu>
    );
};

const Addtab = () => {
    const params = useParams();
    
    return (
        <StyledBrowseMenu>
        <ul className="BrowseMenu-tab">
            {['키즈', '국내 인디', '클래식', '뉴에이지', '국내 어쿠스틱', '해외 일텍트로닉', 'CCM'].map((tab) => {
                return (
                    <li key={tab} className={params.category === tab ? "tab-on" : "tab-off"} >
                        <NavLink to={`/browse/${tab}`}>{tab}</NavLink>
                    </li>
                )
            })}
        </ul>
        </StyledBrowseMenu>
    )
}



export { Browsemenu, Addtab };