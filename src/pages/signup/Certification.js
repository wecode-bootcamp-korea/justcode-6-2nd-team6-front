import styled from '@emotion/styled';
import React from 'react';
import LoginFooter from '../../components/LoginFooter';

const StyledCertification = styled.div`
.certification-inner-box{
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1280px;
    padding: 100px;
    margin: 0 auto;
    .certification-container{
        width: 100%;
        display: flex;
         flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%;
        height: 100%;
        border: 1px solid #eee;
        padding-top: 0px;
        padding: 0px;
        margin: 0 auto;
        /* 본인인증 타이틀 */
        .certification-title-box{
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 50px 0px;
            font:  bold 30px/1 'apple';
        }
        /* 본인인증 폼박스 */
        .certification-form-box{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;

            /* 이름 */
            .certification-name-input{
                position: relative;
                display: flex;
                flex-direction: column;
                input[type=text]{
                    width: 400px;
                    height: 50px;
                    margin-bottom: 50px;
                    border: none;
                    border-bottom: 1px solid #eee;
                }
                .reset-btn{
                    position: absolute;
                    top: 12px;
                    right: 10px;
                    background: none;
                    border: none;
                    font-size: 18px;
                    cursor: pointer;
                }
                .name-error{
                    position: absolute;
                    top: 60px;
                    font: 13px/1 'apple';
                    color: red;
                }
            }
            /* 폰번호 */
            .certification-tel-input{
                position: relative;
                input[type=tel]{
                    width: 400px;
                    height: 50px;
                    margin-bottom: 30px;
                    border: none;
                    border-bottom: 1px solid #eee;
                }
                /* 리셋버튼 */
                .reset-btn{
                    position: absolute;
                    top: 12px;
                    right: 120px;
                    background: none;
                    border: none;
                    font-size: 18px;
                    cursor: pointer;
                }
                /* 인증번호 전송 버튼 */
                .submit-btn{
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 100px;
                    height: 30px;
                    padding: 5px;
                    border: none;
                    border-radius: 30px;
                    background: #ccc;
                    color: #fff;
                    cursor: pointer;
                }
                /* 클레스명이 변경됬을때 표시되는 CSS */
                .submit-btn-on{
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 100px;
                    height: 30px;
                    padding: 5px;
                    border: none;
                    border-radius: 30px;
                    background: #3d40ff;
                    color: #fff;
                    cursor: pointer;
                }
            }
        }

        /* 인증번호 입력 박스 */
        .certification-number-box{
            position: relative;
                display: flex;
                flex-direction: column;
                input[type=text]{
                    width: 400px;
                    height: 50px;
                    margin-bottom: 50px;
                    border: none;
                    border-bottom: 1px solid #eee;
                }
                .reset-btn{
                    position: absolute;
                    top: 12px;
                    right: 55px;
                    background: none;
                    border: none;
                    font-size: 18px;
                    cursor: pointer;
                }
                .timer{
                    position: absolute;
                    top: 15px;
                    right: 10px;
                    color: #3d40ff;
                }
        }

            /* 본인인증 버튼 */
            .certification-btn{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 400px;
                height: 50px;
                margin-bottom: 50px;
                background-color: #ccc ;
                color: #fff;
            }
            /* 클레스명이 변경됬을때 표시되는 CSS */
            .certification-btn-on{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 400px;
                height: 50px;
                margin-bottom: 50px;
                background-color: #3d40ff ;
                color: #fff;
            }
    }
}
`

const Certification = () => {
    return (
        <StyledCertification>
            <div className="certification-inner-box">
                <div className="certification-container">
                    {/* 본인인증 타이틀 */}
                    <div className="certification-title-box">
                        <span className="certification-title">
                            본인인증
                        </span>
                    </div>

                    {/* 본인인증 폼박스 */}
                    <div className="certification-form-box">
                        {/* 이름 */}
                        <div className="certification-name-input">
                            <input type="text" placeholder='이름' />
                            <button className='reset-btn'>X</button>
                            <span className='name-error'>올바른 이름 형식이 아닙니다.</span>
                        </div>
                        {/* 폰번호 */}
                        <div className="certification-tel-input">
                            <input type="tel" placeholder='휴대폰 번호(-제외)' name="phonenumber" id="phonenumber" />
                            <button className='reset-btn'>X</button>
                            <button className='submit-btn'>인증번호 전송</button>
                        </div>
                    </div>

                    <div className="certification-number-box">
                    <input type="text" placeholder='인증번호' />
                            <button className='reset-btn'>X</button>
                            <span className='timer'>00:00</span>
                    </div>

                    <a href="/signform" className="certification-btn">본인인증 완료</a>

                </div>
            </div>
            <LoginFooter />
        </StyledCertification>
    );
};

export default Certification;