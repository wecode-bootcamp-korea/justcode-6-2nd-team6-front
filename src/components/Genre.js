import styled from '@emotion/styled';

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const StyledGenre = styled.div`
.genre-inner-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1280px;
    margin: 0 auto;
    padding: 100px 0px;
    .genre-list-inner-box{
        display: flex;
        flex-direction: column;
        width: 100%;
        /* 테마별 제목 */
        .genre-title-text{
            display: block;
            font:bold 22px/1 'apple';
            margin-bottom: 20px;
        }
        /* 버튼 inner box */
        .genre-list-box{
            width: 100%;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin: 0 auto;
            /* 버튼  */
        .genre-list-item{
            
            position: relative;
            width: 215px;
            height: 100px;
            margin-right: 35px;
            margin-bottom: 30px;
            a{
                display: block;
                width: 100%;
                height: 100%;
            img{
                width: 100%;
                height: 100%;
                border-radius: 10px;
                object-fit: cover;
           }
           span{
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    font: 15px/1 'apple';
                    color: #fff;
                }
            }
        }
    }
}
}
`

const Genre = () => {
    const [genre, setGenre] = useState([])
    const [situation, setSituation] = useState([])
    const [atmosphere, setAtmosphere] = useState([])
    const [audio, setAudio] = useState([])

    const GENRE_LIST = genre.data
    const SITIATION_LIST = situation.data
    const ATMOSPHERE_LIST = atmosphere.data
    const AUDIO_LIST = audio.data

    useEffect(() => {
        fetch("data/Genredata.json")
            .then((res) => res.json())
            .then((res) => {
                setGenre({ data: res.genre });
                setSituation({ data: res.situation });
                setAtmosphere({ data: res.atmosphere });
                setAudio({ data: res.audio });
            })
    }, [])

    console.log(GENRE_LIST);

    return (
        <StyledGenre>

            <section className='genre-inner-box'>

                {/* 장르 */}
                <section className='genre-list-inner-box'>
                    <span className='genre-title-text'>장르</span>
                    <ul className='genre-list-box'>
                        {GENRE_LIST && GENRE_LIST.map((item, index) => {
                            return (
                                <li className='genre-list-item'>
                                    <NavLink to="#" >
                                        <img src={GENRE_LIST[index].img} alt={GENRE_LIST[index].title} />
                                        <span>{GENRE_LIST[index].title}</span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </section>

                {/* 상황 */}
                <section className='genre-list-inner-box'>
                    <span className='genre-title-text'>상황</span>
                    <ul className='genre-list-box'>
                        {SITIATION_LIST && SITIATION_LIST.map((item, index) => {
                            return (
                                <li className='genre-list-item'>
                                    <NavLink to="#" >
                                        <img src={SITIATION_LIST[index].img} alt={SITIATION_LIST[index].title} />
                                        <span>{SITIATION_LIST[index].title}</span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </section>

                {/* 분위기 */}
                <section className='genre-list-inner-box'>
                    <span className='genre-title-text'>분위기</span>
                    <ul className='genre-list-box'>
                        {ATMOSPHERE_LIST && ATMOSPHERE_LIST.map((item, index) => {
                            return (
                                <li className='genre-list-item'>
                                    <NavLink to="#" >
                                        <img src={ATMOSPHERE_LIST[index].img} alt={ATMOSPHERE_LIST[index].title} />
                                        <span>{ATMOSPHERE_LIST[index].title}</span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </section>

                {/* 오디오 */}
                <section className='genre-list-inner-box'>
                    <span className='genre-title-text'>오디오</span>
                    <ul className='genre-list-box'>
                        {AUDIO_LIST && AUDIO_LIST.map((item, index) => {
                            return (
                                <li className='genre-list-item'>
                                    <NavLink to="#" >
                                        <img src={AUDIO_LIST[index].img} alt={AUDIO_LIST[index].title} />
                                        <span>{AUDIO_LIST[index].title}</span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </section>

            </section>


        </StyledGenre>
    );
};

export default Genre;