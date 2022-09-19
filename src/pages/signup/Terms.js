import React from 'react';
import styled from 'styled-components';
import logo from '../../Images/logo.png'

const StyledTerms = styled.div`
.terms-inner-box{
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1280px;
    padding: 100px;
    margin: 0 auto;
    .terms-logo-box{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 300px;
        margin-top: 50px;
        img{
            width: 100%;
        }
    }}
    .terms-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
        height: 100%;
        border: 1px solid #eee;
        padding: 100px;
        margin: 0 auto;
        .terms-list-inner-box{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .terms-title{
                width: 100%;
                margin-bottom: 30px;
                padding-bottom: 30px;
                font: bold 30px/1 'NanumBarunGothic';
                text-align: center;
                border-bottom: 1px solid #ddd;
            }
            ul{
                width: 100%;
                border-bottom: 1px solid #ddd;
                li{
                    display: flex;
                    justify-content: flex-start; 
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
                    width: 70%;
                    padding: 0px 10px;
                    margin-bottom: 35px;
                    font: 16px/1 'apple';
                }
                .specialty{
                    display: block;
                    width: 30%;
                text-align: right;
                font: 14px/1 'apple';
                color: #aaa;
                }
                .text-color{
                    color:#3f3fff;
                }
                }
            }
            .all-access{
                width: 100%;
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
                .all-access-text{
                    &:nth-of-type(1){
                        margin-left: 20px;
                        margin-bottom: 5px;
                        display:inline-block;
                        font: bold 18px/1 'apple' ;
                    }
                    &:nth-of-type(2){
                        display:inline-block;
                        width: 100%;
                        padding-left: 40px;
                        color: #aaa;
                    }
                }
            }
            .terms-next-btn{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 50px;
                margin-top: 50px;
                background:#3d40ff ;
                font: bold 16px/1 'apple';
                color: #fff;
            }
        }
        }
`;

const Terms = () => {
    return (
        <StyledTerms>
            <div className="terms-inner-box">
                <a className="terms-logo-box">
                    <img src={logo} alt="플로리다로고" />
                </a>
                <div className="terms-container">
                    <div className="terms-list-inner-box">
                        <span className='terms-title'>이용약관</span>
                        <ul>
                            <li>
                                <input type="checkbox" name='save-id' id='save-id' />
                                <label for='save-id'></label>
                                <span><span className='text-color'>(필수)</span> 이용약관</span>
                                <span className='specialty'>전문보기</span>
                            </li>
                            <li>
                                <input type="checkbox" name='save-id' id='save-id' />
                                <label for='save-id'></label>
                                <span><span className='text-color'>(필수)</span> 개인정보 수집 및 이용 안내</span>
                                <span className='specialty'>전문보기</span>
                            </li>
                            <li>
                                <input type="checkbox" name='save-id' id='save-id' />
                                <label for='save-id'></label>
                                <span><span className='text-color'>(필수)</span> 제 3자 제공 동의</span>
                                <span className='specialty'>전문보기</span>
                            </li>
                            <li>
                                <input type="checkbox" name='save-id' id='save-id' />
                                <label for='save-id'></label>
                                <span><span>(선택)</span> 제 3자 제공 동의(선택)</span>
                                <span className='specialty'>전문보기</span>
                            </li>
                            <li>
                                <input type="checkbox" name='save-id' id='save-id' />
                                <label for='save-id'></label>
                                <span><span>(선택)</span> 이벤트/혜택 알림 동의</span>
                                <span className='specialty'>전문보기</span>
                            </li>

                        </ul>
                        <div className='all-access'>
                            <input type="checkbox" name='save-id' id='save-id' />
                            <label for='save-id'></label>
                            <span className='all-access-text'>전체동의</span>
                            <span className='all-access-text'>(선택) 이벤트/혜택 알림을 포함하여 모두 동의합니다.</span>
                        </div>
                        <a href="#" className='terms-next-btn'>다음</a>
                    </div>
                </div>
            </div>
        </StyledTerms>
    );
};

export default Terms;