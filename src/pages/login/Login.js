import React from 'react';
import styled from 'styled-components';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import LoginFooter from '../../components/LoginFooter';

const StyledLogin = styled.div`
.login-inner-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1280px;
    padding: 100px;
    margin: 0 auto;
    .login-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
        height: 100%;
        border: 1px solid #eee;
        padding: 100px;
        margin: 0 auto;
        margin-top: 100px;
        .login-form-inner-box{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            /* 아이디창 */
            .login-form-id{
                input[type=text]{
                    width: 400px;
                    height: 50px;
                    margin-bottom: 30px;
                    border: none;
                    border-bottom: 1px solid #eee;

                }
            }
            /* 페스워드창 */
            .login-form-pwd{
                position: relative;
                margin-bottom: 20px;
                input[type=password]{
                    width: 400px;
                    height: 50px;
                    border: none;
                    border-bottom: 1px solid #eee;
                }
                .blind-pwd{
                    position: absolute;
                    top: 10px;
                    right:15px;
                    font-size: 25px;
                    color: #ccc;

                }
            }
            /* 아이디 저장벝튼 */
            .login-save-id{
                display: flex;
                align-items: center;
                width: 100%;
                padding-left: 10px;
                margin-bottom: 20px;
                input[type='checkbox'] {
                  display: none;
                }
                input[id='save-id'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 1px solid #aaa;
                  border-radius: 3px;
                  background: #fff;
                  cursor: pointer;
                }
                input[id='save-id']:checked + label {
                  position: relative;
                  background:#3d40ff ;
                  &::before {
                    position: absolute;
                    top: 3px;
                    left: 3px;
                    content: '\f00c';
                    font-family: FontAwesome;
                    font-size: 12px;
                    text-align: center;
                    color: #fff;
                  }
                }
                span{
                    font : 16px/1 'NanumBarunGothic';
                    padding-left: 15px;
                }
            }
            /* 로그인 버튼 */
            .login-btn{
                display: flex;
                justify-content: center;
                align-items: center;
                background: #d9d9ff;
                width: 400px;
                height: 50px;
                span{
                    font:bold 18px/1 'NanumBarunGothic'; 
                    color: #fff;
                }
            }
            /* 아아디 비밀번호 찾기 */
            .login-find-idpw{
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding: 20px 10px;
                font: 16px/1 'NanumBarunGothic';
                ul{
                    display: flex;
                    li{
                        margin-right:10px;
                        &::after{
                            content: '|';
                            margin-left: 10px;
                        }
                        &:last-child::after{content:'';}
                        a{
                            color: #929292;
                        }
                    }
                }
                .link-signup{
                    color: #000;
                }
            }
            /* T로그인 / 휴대폰번호로그인 */
            .login-btn-box{
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100%;
                height: 100px;
                .t-login{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 49%;
                    height: 50px;
                    font: bold 15px/1 'NanumBarunGothic';
                    background: #333;
                    color:#fff
                }
                .tel-login{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 49%;
                    height: 50px;
                    border: 1px solid #333;
                    font: bold 15px/1 'NanumBarunGothic';
                    background: #fff;
                    color:#333
                }
            }
            /* SNS로그인 */
            .login-sns-box{
                width: 100%;
                display: flex;
                justify-content: center;
                .naver-login{
                    width: 50px;
                    height: 50px;
                    margin-right: 20px;
                    background: url('https://cdn.music-flo.com/poc/p/image/social/btn_login_naver.png' );
                    background-size: cover;
                }
                .kakao-login{                    
                    width: 50px;
                    height: 50px;
                    background: url('https://ifh.cc/g/Jjqw68.png');
                    background-size: cover;}
                .apple-login{            
                            width: 50px;
                    height: 50px;
                    margin-left: 20px;
                    background: url('https://ifh.cc/g/Zv407V.png');
                    background-size: cover;}
            }
        }
    }
}
`

const Login = () => {
    return (
        <StyledLogin>
            <div className="login-inner-box">
                <div className="login-container">
                    {/* 웹접근성 스크린 리더기 부분 */}
                    <h1 className='hidden'>로그인</h1>
                    <div className="login-form-inner-box">

                        {/* 아이디창 */}
                        <div className="login-form-id">
                            <input type="text" placeholder='아이디(이메일)' />
                        </div>

                        {/* 페스워드창 */}
                        <div className="login-form-pwd">
                            <input type="password" placeholder='비밀번호' name="" id="" />
                            <span className='blind-pwd'><AiFillEye/></span>
                        </div>

                        {/* 아이디 저장버튼 */}
                        <div className="login-save-id">
                            <input type="checkbox" name='save-id' id='save-id' />
                            <label for='save-id'></label>
                            <span>아이디 저장</span>
                        </div>

                        {/* 로그인버튼 */}
                        <a href="#" className='login-btn'>
                            <span>로그인</span>
                        </a>

                        {/* 아이디 비밀번호 찾기 */}
                        <div className="login-find-idpw">
                            <ul>
                                <li>
                                    <a href="#">아이디 찾기</a>
                                </li>
                                <li>
                                    <a href="#">비밀번호 찾기</a>
                                </li>
                            </ul>
                            <a href='/signup' className='link-signup'>회원가입</a>
                        </div>

                        {/* T아이디로 로그인 / 휴대폰 번호로 로그인 */}
                        <div className="login-btn-box">
                            <a href="#" className='t-login'>
                                <span>T아이디로 로그인</span>
                            </a>
                            <a href="#" className='tel-login'>
                                <span>휴대폰 번호로 로그인</span>
                            </a>
                        </div>

                        {/* SNS로그인 */}
                        <div className="login-sns-box">
                            <a href="" className='naver-login'>
                                <span className='hidden'>네이버로그인</span>
                            </a>
                            <a href="" className='kakao-login'>
                                <span className='hidden'>카카오로그인</span>
                            </a>
                            <a href="" className='apple-login'>
                                <span className='hidden'>애플로그인</span>
                            </a>
                        </div>
                    </div>

                </div>

                <LoginFooter/>
            </div>
        </StyledLogin>
    );
};

export default Login;