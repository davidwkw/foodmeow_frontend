import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import Pacman from '../pacman.gif';
import Boiling from '../boiling.gif';

// const bounceIn = keyframes`
//     0% {
//     opacity: 0;
//     -webkit-transform: scale3d(0.3, 0.3, 0.3);
//     transform: translateY(-50%) scale3d(0.3, 0.3, 0.3);
//     }

//     20% {
//     -webkit-transform: scale3d(1.1, 1.1, 1.1);
//     transform: scale3d(1.1, 1.1, 1.1);
//     }

//     40% {
//     -webkit-transform: scale3d(0.9, 0.9, 0.9);
//     transform: scale3d(0.9, 0.9, 0.9);
//     }

//     60% {
//     opacity: 1;
//     -webkit-transform: scale3d(1.03, 1.03, 1.03);
//     transform: scale3d(1.03, 1.03, 1.03);
//     }

//     80% {
//     -webkit-transform: scale3d(0.97, 0.97, 0.97);
//     transform: scale3d(0.97, 0.97, 0.97);
//     }

//     to {
//     opacity: 1;
//     -webkit-transform: scale3d(1, 1, 1);
//     transform: scale3d(1, 1, 1);
//     }   
// `
// const Animate = styled.div`
//     animation: ${bounceIn} 0.5s;  
// `


const Loading = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 100%;
    overflow: hidden;
    position: fixed;
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
`
const Img = styled.img`
    position: absolute;
    top: -15px;
    left: -60px;
    width: 150%;
`

export default () => {
    return(
        <Loading>
            <Img src={Boiling} alt="loading"/>
        </Loading>
    )
}