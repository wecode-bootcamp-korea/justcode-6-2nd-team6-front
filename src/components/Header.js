import styled from '@emotion/styled';
import React, { useState } from 'react';
import logo from '../Images/logo.png';
import { AiOutlineSearch } from "react-icons/ai";

const StyledHeader = styled.header`
	.header-inner-box {
		display: flex;
		width: 1280px;
		height: 100px;
		margin: 0 auto;

		/* 로고박스 */
		.header-logo-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 120px;
			margin-right: 30px;
			.header-logo {
				width: 100%;
				img {
					width: 100%;
				}
			}
		}
		/* 메뉴박스 */
		.header-nav-box {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 230px;
			.header-nav-list {
				display: flex;
				li {
					margin-right: 30px;
					a {
						font: 16px/1 'apple';
						color: #000;
					}
				}
			}
		}
		/* 검색창 */
		.header-input-box {
            position: relative;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 40%;
			input[type='text'] {
				width: 200px;
				height: 30px;
				border-radius: 100px;
				padding: 10px;
				padding-left: 40px;
				border: 1px solid #bbb;
			}
            svg{
                position: relative;
                left: 30px;
            }
		}
		/* 크리에이터/로그인/회원가입 박스 */
		.header-login-box {
			position: relative;
			display: flex;
            justify-content: flex-end;
            width: 30%;
			.header-login-menu-box {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.header-login-menu-list {
					display: flex;
					li {
						margin-right: 20px;
						a {
							font: 14px/1 'apple';
							color: #777;
						}
					}
				}
			}
		}
	}
`;

const Header = () => {
    const [username, setUserName] = useState('로그인')
    return (
        <StyledHeader>
            <div className='header-inner-box'>
                {/* 로고박스 */}
                <div className='header-logo-box'>
                    <a href='#' className='header-logo'>
                        <img src={logo} alt='Florida로고' />
                    </a>
                </div>

                {/* 메뉴박스 */}
                <div className='header-nav-box'>
                    <ul className='header-nav-list'>
                        <li>
                            <a href='#'>둘러보기</a>
                        </li>
                        <li>
                            <a href='#'>보관함</a>
                        </li>
                        <li>
                            <a href='#'>이용권</a>
                        </li>
                    </ul>
                </div>

                {/* 검색창 */}
                <div className='header-input-box'>
                  <AiOutlineSearch />
                    <input type='text' placeholder='검색어를 입력하세요' />
                </div>

                {/* 크리에이터 스튜디오 / 로그인 / 회원가입 박스 로그인OFF */}
                <div className='header-login-box'>
                    <div className='header-login-menu-box'>
                        <ul className='header-login-menu-list'>
                            <li>
                                <a href='#'>크리에이터 스튜디오</a>
                            </li>
                            <li>
                                {/* 스테이트로 닉네임값을 받아와야함 */}
                                <a href='/login'>{username}</a>
                            </li>
                            <li>
                                <a href='/signup'>회원가입</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </StyledHeader>
    );
};

export default Header;
