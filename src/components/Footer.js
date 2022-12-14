import styled from '@emotion/styled';
import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';



const StyledFooter = styled.footer`
.footer-inner-box{
    width: 1280px;
    height: 300px;
    margin: 0 auto;
    margin-bottom: 50px;
    .footer-nav-inner-box{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 20px 0px;
        border-bottom: 1px solid #ddd;
        .footer-nav-list{
            width: 50%;
            display: flex;
            ul{
                 display: flex;
                 li{
                    margin-right: 20px;
                    a{
                        font:bold 14px/1 'NanumBarunGothic' ;
                        color: #000;
                    }
                 }
                }
        }
        .footer-sns-box{
            ul{
                display: flex;
                li{
                    margin-right: 15px;
                    font-size: 18px;
                    svg{
                        color: #333;
                    }
                }
            }
       
        }
    }

    .footer-main-inner-box{
       .footer-main-menu{
      display: flex;
      li{
        margin: 20px 0px;
        a{        
            font : 13px/1 'NanumBarunGothic';
            color: #4a4a4a;
        }
        &::after{
            content: '|';
           margin: 0 10px;
            color: #aaa;
            font-size: 15px;
            line-height: 1;

        }
        &:last-child::after{content:'';}
      }
       }
       .footer-address-top{
        margin-bottom: 20px;
        font : 13px/1 'NanumBarunGothic';
            color: #4a4a4a;
            span{
                &::after{
            content: '|';
           margin: 0 5px;
            color: #aaa;
            font-size: 15px;
            line-height: 1;
        }
        &:last-child::after{content:'';}
            }
       }
       .footer-address-bottom{
        .florida{
            margin-bottom: 3px;
        }
        .ilever{
            margin-bottom: 20px;
        }
        font : 13px/1 'NanumBarunGothic';
            color: #4a4a4a;
            span{
                &::after{
            content: '|';
           margin: 0 5px;
            color: #aaa;
            font-size: 15px;
            line-height: 1;
        }
        &:last-child::after{content:'';}
        
            }
       }
       .footer-copyright{
        display: flex;
        justify-content: space-between;
        font : 12px/1 'NanumBarunGothic';
            color: #4a4a4a;
            span{
            &:nth-of-type(1){
                color: #000;
            
            }}
       }
    }
}

`

const Footer = () => {

    return (
        <StyledFooter>
            <div className="footer-inner-box">
                {/* Footer ???????????? */}
                <div className="footer-nav-inner-box">
                    <div className="footer-nav-list">
                        <ul>
                            <li><NavLink to="#">FRD ??????</NavLink></li>
                            <li><NavLink to="#">????????????</NavLink></li>
                            <li><NavLink to="#">????????????</NavLink></li>
                            <li><NavLink to="#">FRD ???????????? ????????????</NavLink></li>
                            <li><NavLink to="#">FRD ??????????????? ????????????</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-sns-box">
                        <ul>
                            <li><NavLink to="#"><FaFacebookF /></NavLink></li>
                            <li><NavLink to="#"><FaInstagram /></NavLink></li>
                            <li><NavLink to="#"><FaYoutube /></NavLink></li>
                            <li><NavLink to="#"><FaTwitter /></NavLink></li>
                        </ul>
                    </div>
                </div>

                {/* Footer ???????????? */}
                <div className="footer-main-inner-box">
                    <div className="footer-main-nav-list-box">
                        <ul className='footer-main-menu'>
                            <li><NavLink to="#">????????????</NavLink></li>
                            <li><NavLink to="#">????????????</NavLink></li>
                            <li><NavLink to="#">???????????? ????????????</NavLink></li>
                            <li><NavLink to="#">????????? ????????????</NavLink></li>
                            <li><NavLink to="#">??????????????? ??????</NavLink></li>
                        </ul>
                        <div className='footer-address-top'>
                            <span>?????? : FLORIDA</span>
                            <span>????????? : florida@music-florida-co.kr</span>
                            <span>????????? ???????????? : 382-28-33943</span>
                            <span>??????????????? ???????????? : 2000-????????????-2939</span>
                        </div>
                        <div className='footer-address-bottom'>
                            <div className="florida">
                                <span>???????????? : ??????????????? ????????? ???????????? 203 ???????????? 20F</span><span>???????????? : 1588-0293</span>
                            </div>
                            <div className="ilever">
                                <span>???????????? : ??????????????? ????????? ????????? 18??? 5</span><span>???????????? : 1577-5557</span>
                            </div>
                        </div>
                        <div className="footer-copyright">
                            <span>(???)????????????????????? ALL RIGHTS RESERVED</span>
                            <span>??? ???????????? Chorm ??? Microsoft Edge ?????????????????? ?????? ???????????????.</span>
                        </div>
                    </div>
                </div>
            </div>

        </StyledFooter>
    );
};

export default Footer;