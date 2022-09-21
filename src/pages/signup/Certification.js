import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
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
                input[type=number]{
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
                    right: 105px;
                    background: none;
                    border: none;
                    font-size: 18px;
                    cursor: pointer;
                }
                /* 인증번호 전송 버튼 */
                .submit-btn{
                    position: absolute;
                    top: 10px;
                    right: 5px;
                    width: 100px;
                    height: 30px;
                    padding: 5px;
                    border: none;
                    border-radius: 30px;
                    background: #3d40ff;
                    color: #fff;
                    cursor: pointer;
                    &:disabled{
                    background:#ddd ;
                    cursor: default;
                }
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
                background-color: #3d40ff ;
                border: none;
                color: #fff;
                &:disabled{
                    background:#ddd ;
                    cursor: default;
                }
            }
    }
}
`

const Certification = () => {
    // Input값을 담을 State생성
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [certification, setCertification] = useState('')
    // 본인인증 완료 버튼 토글
    const [disabled, setDisabled] = useState(true)
    const [certificationBtn, setCertificationBtn] = useState(true)

    // 타이머 State
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0)

    // 이름 Input값 State에 담는 함수
    const onChangeName = (e) => {
        setName(e.target.value);
    };
    // 이름 초기화 함수
    const onResetName = () => {
        setName(' ');
    }

    // 핸드폰번호 Input값 State에 담는 함수
    const onChangePhone = (e) => {
        setPhone(e.target.value);
    };
    // 핸드폰번호 초기화 함수
    const onResetPhone = () => {
        setPhone(' ');
    }
    // 인증번호 Input값 State에 담는 함수
    const onChangeCertification = (e) => {
        setCertification(e.target.value);
    };
    // 인증번호 초기화 함수
    const onResetCertification = () => {
        setCertification(' ');
    }

    // 본인인증 완료 버튼 Validation
    useEffect(() => {
        if (name.length > 2 && phone.length > 10 && certification.length > 5) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    })
    //  번호인증 버튼 Validation
    useEffect(() => {
        if (phone.length > 10) {
            setCertificationBtn(false)
        } else {
            setCertificationBtn(true)
        }
    })



    // 타이머 함수
    const Timer = () => {
        useEffect(() => {
            let intervalId;
            if (isActive) {
                intervalId = setInterval(() => {
                  const secondCounter = counter % 60;
                  const minuteCounter = Math.floor(counter / 60);
          
                  const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
                  const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
          
                  setSecond(computedSecond);
                  setMinute(computedMinute);
          
                  setCounter(counter => counter + 1);
                }, 1000)
              }
          
              return () => clearInterval(intervalId);
            }, [isActive, counter])
    }



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
                        <form className="certification-name-input">
                            <input type="text" placeholder='이름' onChange={onChangeName} />
                            {name.length > 0 ? <button type='reset' className='reset-btn' onClick={onResetName}>X</button> : null}


                        </form>
                        {/* 폰번호 */}
                        <form className="certification-tel-input">
                            <input type="number" placeholder='휴대폰 번호(-제외)' name="phonenumber" id="phonenumber" onChange={onChangePhone} />
                            {phone.length > 0 ? <button type='reset' className='reset-btn' onClick={onResetPhone}>X</button> : null}
                            <button type='submit' disabled={certificationBtn} className='submit-btn' onClick={()=>{setIsActive(!isActive)}}>인증번호 전송</button>
                        </form>
                    </div>

                    <form className="certification-number-box">
                        <input type="text" placeholder='인증번호' onChange={onChangeCertification} />
                        {certification.length > 0 ? <button type='reset' className='reset-btn' onClick={onResetCertification}>X</button> : null}
                        <span className='timer'>{minute}:{second}</span>
                    </form>

                    <button href="/signform" className="certification-btn" disabled={disabled}>본인인증 완료</button>

                </div>
            </div>
            <LoginFooter />
        </StyledCertification>
    );
};

export default Certification;