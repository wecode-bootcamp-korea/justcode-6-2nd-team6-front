import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../../Images/logo.png'




const StyledSignform = styled.div`
      input[type=text]{
                    height: 50px;
                    margin-bottom: 50px;
                    padding-left: 10px;
                    border: none;
                    border-bottom: 1px solid #eee;
                }
      input[type=number]{
                    height: 50px;
                    margin-bottom: 50px;
                    padding-left: 10px;
                    border: none;
                    border-bottom: 1px solid #eee;
                }
                input[type=password]{
                    height: 50px;
                    margin-bottom: 50px;
                    padding-left: 10px;
                    border: none;
                    border-bottom: 1px solid #eee;
                }
                select{
                    width: 200px;
                    height: 50px;
                    border: none;
                    border-bottom: 1px solid #eee;
                }
.signform-inner-box{
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1280px;
    padding: 100px;
    margin: 0 auto;
    .signform-logo-box{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 300px;
        margin-top: 100px;
        img{
            width: 100%;
        }
    }
    .signform-container{
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
        /* 제목 */
        .signform-title-box{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            .signform-title-text{
                width: 100%;
                margin-top: 50px;
                margin-bottom: 20px;
                text-align: center;
                font: bold 30px/1 'apple';
            }
            .signform-sub-text{
                font: 16px/1 'apple';
                color: #444;
                margin-bottom: 70px;
            }
        }
        /* form박스 - 이메일 */
        .email-box{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            input[type=text]{
                width: 200px;
                margin-right: 20px;
            }
            span{
                font: 18px/1 'apple';
                margin-right: 20px;
            }
            .id-error{
                position: absolute;
                left: 95px;
                top: 60px;
                font: 12px/1 'apple';
                color: #3f3fff;
            }
        }

        /* form박스 - 비밀번호 */
        .password-box{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            input[type=password]{
                width: 460px;
            }
            .pwd-text{
                position: absolute;
                top: 60px;
                left: 0%;
                font: 12px/1 'apple';
                color: #3f3fff;
            }
            .pwd-unacces{
                position: absolute;
                top: 160px;
                left: 0;
                font: 12px/1 'apple';
                color: #3f3fff;
            }
            .re-pwd-access{
                display: none;
                position: absolute;
                top: 160px;
                left: 0%;
                font: 12px/1 'apple';
                color: #3f3fff;
            }
            

        }

        /* form박스 - 주민번호 */
        .birthday{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            input[type=number]{
                padding-left: 10px;
                width: 200px;
                margin-right: 20px;
            }
            input[type=text]{
                padding-left: 10px;
                width: 200px;
                margin-right: 20px;
            }
            span{
                font: 18px/1 'apple';
                margin-right: 20px;
            }
            .hyphen{
                position: relative;
                bottom: 20px;
            }
            .bullet{
                position: absolute;
                right: 130px;
                top: 12px;
                font:bold 25px/1 'apple';
            }
            .birth-access{
                position: absolute;
                top: 60px;
                left: 95px;
                font: 12px/1 'apple';
                color: #3f3fff;
            }
            .gender-access{
                position: absolute;
                top: 60px;
                left: 340px;
                font: 12px/1 'apple';
                color: #3f3fff;
            }
        }
        /* 본인인증 버튼 */
.signform-btn{
display: flex;
justify-content: center;
align-items: center;
width: 400px;
height: 50px;
margin-bottom: 50px;
background-color: #3d40ff ;
color: #fff;
&:disabled{
                    background:#ddd ;
                    cursor: default;
                }
}
        }}
`

const Signform = () => {
    const selectList = ['naver.com', 'hanmail.net', 'daum.net', 'nate.com', 'gmail.com', 'hotmail.com', 'lycos.co.kr', 'empal.com', 'cyworld.com', 'yahoo.co.kr', 'paran.com', '직접입력']

    const selectOption = selectList.map((item) => { return (<option value={item} key={item}>{item}</option>) })

    // Input값을 담을 스테이트
    const [emailId, setEmailId] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('');

    // 오류메세지
    const [pwdError, setPwdError] =useState('');
    const [emailError, setEmailError] =useState('');
    const [birthError, setBirthError] =useState('')
    const [genderError, setGenderError] =useState('')

    // 가입완료 버튼 토글
    const [disabled, setDisabled] = useState(true)

    // Input Value값 담을 함수
    const onChangeEmilId = (e) => {
        setEmailId(e.target.value);
    }
    const onChangeEmilAddress = (e) => {
        setEmailAddress(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onChangeRePassword = (e) => {
        setRePassword(e.target.value);
    }
    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }
    const onChangeGender = (e) => {
        setGender(e.target.value);
    }

    useEffect(() => {
        if (emailId.length > 8 && password.length > 8 && birth.length > 5 && gender.length > 0 && password === rePassword ) {
            return setDisabled(false)
        } else {
            return setDisabled(true)
        }
    },[])

    useEffect(()=>{
        if(password.length < 1 || rePassword.length < 1){
            return setPwdError('비밀번호를 입력해주세요')
        } else if(password === rePassword) {
            return setPwdError('비밀번호가 일치합니다.')
        } else {
            setPwdError('앗! 비밀번호가 일치하지 않습니다.')
        }
    },[password, rePassword])

    useEffect(()=>{
        if(emailId.length < 1){
            return setEmailError('이메일을 입력해주세요')
        } else if(emailId.length > 7){
            return setEmailError('사용가능한 이메일 입니다.')
        } else{
            return setEmailError('정확한 이메일을 작성해 주세요')
        }
    },[emailId])

    useEffect(()=>{
        if(birth.length < 1){
            return setBirthError('생년월일을 입력해주세요')
        } else if(birth.length < 6){
            return setBirthError('')
        } else if(birth.length > 6){
            return setBirthError('생년월알 6자리를 초과했습니다.')
        }
    },[birth])

    useEffect(()=>{
        if(gender.length < 1 && gender.length < 2){
            return setGenderError('주민등록번호 앞에 한자리수를 입력해주세요')
        } else if(gender.valueOf('1')==='1' ){
            return setGenderError('')
        }  else if(gender.valueOf('2')==='2' ){
            return setGenderError('')
        }else if(gender.valueOf('3')==='3' ){
            return setGenderError('')
        }  else if(gender.valueOf('4')==='4' ){
            return setGenderError('')
        }
         else{
            return setGenderError('정확한 주민등록번호 앞자리를 입력해주세요')
        }
    },[gender])
    



    return (
        <StyledSignform>
            <div className="signform-inner-box">
                {/* 로고박스 */}
                <a className="signform-logo-box">
                    <img src={logo} alt="플로리다로고" />
                </a>
                <div className="signform-container">
                    {/* 제목 */}
                    <div className="signform-title-box">
                        <div className="signform-title-text">
                            <span>회원가입</span>
                        </div>
                    </div>
                    {/* form박스 - 이메일 */}
                    <div className="email-box">
                        <div className="signform-form-box">
                            <input type="text" placeholder='아이디(이메일)' onChange={onChangeEmilId} /> <span>@</span>
                            <span className="id-error">
                             {emailError}
                            </span>
                            <select name="email" id="email" onChange={onChangeEmilAddress}>
                                {selectOption}
                            </select>
                        </div>
                    </div>

                    {/* form박스 - 비밀번호 */}
                    <div className="password-box">
                        <input type="password" placeholder='비밀번호' name="pwd" id="pwd" onChange={onChangePassword} />
                        {/* 기본으로 보여줄 PW 조건 */}
                        <span className='pwd-text'>영문과 숫자 조합으로 최소 6-15자로 입력해주세요</span>
                        <input type="password" placeholder='비밀번호 재확인' name="re-pwd" id="re-pwd" onChange={onChangeRePassword}/>
                        {/* 비밀번호 일치/오류 text */}
                        <span className='pwd-unacces'>{pwdError}</span>


                    </div>

                    {/* form박스 - 주민번호 */}
                    <div className="birthday">
                        <input type="number" placeholder='생년월일 (ex.880101)' onChange={onChangeBirth} maxLength={'6'} /><span className='hyphen'>-</span>
                        <input type="text" maxLength={'1'} onChange={onChangeGender} /><span className='bullet'>••••••</span>
                        <span className='birth-access'>{birthError}</span>
                        <span className="gender-access">
                            {genderError}
                        </span>
                    </div>

                    <button type='submit' disabled={disabled} className='signform-btn'>가입 완료</button>
                </div>
            </div>
        </StyledSignform>
    );
};

export default Signform;